import Major from 'models/education/major';
import Folder from 'models/file/folder';
import Subject from 'models/education/subject';

export default async (req, res, next) => {
  try {
    const { body } = req;
    const { type, id } = req.userTokenData;

    const newSubject = await new Subject({ ...body });

    const newFolder = await new Folder({
      name: newSubject.name,
      tagDepth: 'Subject',
      tagOwner: newSubject._id,
      creator: id,
      allUsers: type
    });

    // find folder based on major, push content with new folder
    const majorFolder = await Folder.findOneAndUpdate(
      { tagOwner: body.major, tagDepth: 'Major' },
      { $push: { contents: { file: newFolder._id, fileType: 'FileFolder' } } }
    );

    newSubject.folder = newFolder._id;

    await newSubject.save();
    await newFolder.save();

    const updatedMajor = await Major.findOneAndUpdate(
      { _id: body.major },
      { $push: { subjects: newSubject._id } },
      { new: true }
    );

    if (updatedMajor && newSubject && newFolder) {
      res.status(201).json({
        subjectFolder: newFolder,
        majorFolder,
        faculty: updatedMajor,
        subject: newSubject
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
