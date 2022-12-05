import University from 'models/education/university';
import Faculty from 'models/education/faculty';
import Folder from 'models/file/folder';

export default async (req, res, next) => {
  try {
    const { body } = req;
    const { type, id } = req.userTokenData;

    const newFaculty = await new Faculty({ ...body });

    const newFolder = await new Folder({
      name: newFaculty.name,
      tagDepth: 'Faculty',
      tagOwner: newFaculty._id,
      creator: id,
      allUsers: type
    });

    // find folder based on university, push content with new folder
    const universityFolder = await Folder.findOneAndUpdate(
      { tagOwner: body.university, tagDepth: 'University' },
      { $push: { contents: { file: newFolder._id, fileType: 'FileFolder' } } }
    );

    newFaculty.folder = newFolder._id;

    await newFaculty.save();
    await newFolder.save();

    const updatedUniversity = await University.findOneAndUpdate(
      { _id: body.university },
      { $push: { faculties: newFaculty._id } },
      { new: true }
    );

    if (updatedUniversity && newFaculty && newFolder) {
      res.status(201).json({
        facultyFolder: newFolder,
        universityFolder,
        university: updatedUniversity,
        faculty: newFaculty
      });
    }
  } catch (err) {
    res.status(400).json({
      err: err.message
    });

    next(err);
  }
};
