import University from 'models/education/university';
import Folder from 'models/file/folder';

export default async (req, res, next) => {
  try {
    const { body } = req;
    const { type, id } = req.userTokenData;

    const newUniversity = await new University({ ...body });

    const newFolder = await new Folder({
      name: newUniversity.name,
      tagDepth: 'University',
      tagOwner: newUniversity._id,
      creator: id,
      allUsers: type
    });

    newUniversity.folder = newFolder._id;

    await newUniversity.save();
    await newFolder.save();

    // await newUser.save();

    if (newUniversity) {
      res.status(201).json({
        newUniversity
      });
    }
  } catch (err) {
    res.status(400).json({
      err: err.message
    });

    next(err);
  }
};
