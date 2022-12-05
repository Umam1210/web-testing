import University from 'models/education/university';
import Faculty from 'models/education/faculty';
import Major from 'models/education/major';
import Folder from 'models/file/folder';

export default async (req, res, next) => {
  try {
    const { body } = req;
    const { type: userType, id: userId } = req.userTokenData.tokenData;

    console.log('userType', userType);
    console.log('userId', userId);

    const newUniversity = await new University({ ...body });
    const newFaculty = await new Faculty({ name: body.name });
    const newMajor = await new Major({ name: body.name });

    newUniversity.faculties = [newFaculty._id];
    newFaculty.university = newUniversity._id;
    newFaculty.majors = [newMajor._id];
    newMajor.university = newUniversity._id;
    newMajor.faculty = newFaculty._id;

    // Create all the folders
    const newUniversityFolder = await new Folder({
      name: newUniversity.name,
      tagDepth: 'University',
      tagOwner: newUniversity._id,
      creator: userId,
      allUsers: userType,
      contents: []
    });

    const newFacultyFolder = await new Folder({
      name: newFaculty.name,
      tagDepth: 'Faculty',
      tagOwner: newFaculty._id,
      creator: userId,
      allUsers: userType,
      contents: []
    });

    const newMajorFolder = await new Folder({
      name: newMajor.name,
      tagDepth: 'Major',
      tagOwner: newMajor._id,
      creator: userId,
      allUsers: userType,
      contents: []
    });

    // Fill the folders
    newUniversityFolder.contents = [{ file: newFacultyFolder._id, fileType: 'FileFolder' }];
    newFacultyFolder.contents = [{ file: newMajorFolder._id, fileType: 'FileFolder' }];
    newMajorFolder.contents = [];

    // Append all folders to each level
    newUniversity.folder = newUniversityFolder._id;
    newFaculty.folder = newFacultyFolder._id;
    newMajor.folder = newMajorFolder._id;

    // Save all the folders
    await newUniversityFolder.save();
    await newFacultyFolder.save();
    await newMajorFolder.save();
    await newUniversity.save();
    await newFaculty.save();
    await newMajor.save();

    if (
      newUniversityFolder &&
      newFacultyFolder &&
      newMajorFolder &&
      newUniversity &&
      newFaculty &&
      newMajor
    ) {
      res.status(201).json({
        newUniversity,
        newFaculty,
        newMajor,
        newUniversityFolder,
        newFacultyFolder,
        newMajorFolder
      });
    }
  } catch (err) {
    res.status(400).json({
      err: err.message
    });

    next(err);
  }
};
