import Faculty from 'models/education/faculty';
import ClassRoom from 'models/education/classRoom';
import Major from 'models/education/major';
import Folder from 'models/file/folder';
import Subject from 'models/education/subject';

export default async (req, res, next) => {
  try {
    const { body } = req;
    const { type, id } = req.userTokenData;

    const newClassRoom = await new ClassRoom({ ...body });

    const newFolder = await new Folder({
      name: newClassRoom.name,
      tagDepth: 'ClassRoom',
      tagOwner: newClassRoom._id,
      creator: id,
      allUsers: type
    });

    // find folder based on subject, push content with new folder
    const subjectFolder = await Folder.findOneAndUpdate(
      { tagOwner: body.subject, tagDepth: 'Subject' },
      { $push: { contents: { file: newFolder._id, fileType: 'FileFolder' } } }
    );

    newClassRoom.folder = newFolder._id;

    await newClassRoom.save();
    await newFolder.save();

    const updatedSubject = await Subject.findOneAndUpdate(
      { _id: body.subject },
      { $push: { classRooms: newClassRoom._id } },
      { new: true }
    );

    if (updatedSubject && newClassRoom && newFolder) {
      res.status(201).json({
        classRoomFolder: newFolder,
        subjectFolder,
        subject: updatedSubject,
        classRoom: newClassRoom
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
