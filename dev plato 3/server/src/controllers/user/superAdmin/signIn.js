require('dotenv').config();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import SuperAdmin from 'models/user/superAdmin';

export default async (req, res) => {
  try {
    const {
      body: { email, password }
    } = req;
    const foundUser = await SuperAdmin.findOne({ email }).lean();

    console.log('req.body', req.body);

    if (!foundUser) {
      res.status(400).json({
        code: 'ENF-0001'
      });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, foundUser.password);

    if (!passwordMatch) {
      res.status(400).json({
        success: 0,
        code: 'ENF-0002'
      });
      return;
    } else {
      const token = await jwt.sign(
        {
          id: foundUser._id,
          type: foundUser.userType
        },
        process.env.JWT_KEY
      );

      res.status(200).json({
        token
      });
    }
  } catch (err) {
    res.status(400).json({
      err,
      status: 0,
      message: 'Error.'
    });
  }
};
