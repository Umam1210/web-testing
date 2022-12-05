import Faculty from 'models/education/faculty';
import Major from 'models/education/major';
import Folder from 'models/file/folder';

export default async (req, res, next) => {
  try {
    const { body } = req;
    const { type, id } = req.userTokenData;

    const newMajor = await new Major({ ...body });

    const newFolder = await new Folder({
      name: newMajor.name,
      tagDepth: 'Major',
      tagOwner: newMajor._id,
      creator: id,
      allUsers: type
    });

    // find folder based on faculty, push content with new folder
    const facultyFolder = await Folder.findOneAndUpdate(
      { tagOwner: body.faculty, tagDepth: 'Faculty' },
      { $push: { contents: { file: newFolder._id, fileType: 'FileFolder' } } }
    );

    newMajor.folder = newFolder._id;

    await newMajor.save();
    await newFolder.save();

    const updatedFaculty = await Faculty.findOneAndUpdate(
      { _id: body.faculty },
      { $push: { majors: newMajor._id } },
      { new: true }
    );

    if (updatedFaculty && newMajor && newFolder) {
      res.status(201).json({
        majorFolder: newFolder,
        facultyFolder,
        faculty: updatedFaculty,
        major: newMajor
      });
    } else {
      res.status(400).json({
        err: 'Something went wrong'
      });
    }
  } catch (err) {
    res.status(400).json({
      err: err.message
    });

    next(err);
  }
};
