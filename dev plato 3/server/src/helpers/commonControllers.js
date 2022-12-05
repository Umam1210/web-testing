// Description: This is the main controller that will be used in the routes.

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// import EmailOTPVerification from 'models/otp/EmailOTPVerification';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// nodemailer OTP
let otpVerification = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use TLS
  requireTLS: true,
  auth: {
    user: process.env.AUTH_EMAIL_OTP,
    pass: process.env.AUTH_PASS_OTP
  }
});

// verify connection configuration
otpVerification.verify(function (error, success) {
  if (error) {
    console.log(error);
    console.log(process.env.AUTH_EMAIL_OTP);
  }
});

// nodemailer ForgotPassword
let forgotPassword = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true, // use TLS
  requireTLS: true,
  auth: {
    user: process.env.AUTH_EMAIL_FP,
    pass: process.env.AUTH_PASS_FP
  }
});

// verify connection configuration
forgotPassword.verify(function (error, success) {
  if (error) {
    console.log(error);
  }
});

const getAllCommon = (Model) => async (req, res) => {
  try {
    const data = await Model.find().select('-password').lean();

    res.status(200).json({
      data
    });
  } catch (err) {
    res.status(400).json({
      err
    });
  }
};

const getOneCommon = (Model) => async (req, res) => {
  try {
    const { id } = req.params;
    const singleFind = await Model.findById(id).select('-password').lean();

    if (singleFind) {
      res.status(200).json({
        data: singleFind
      });
    } else {
      res.status(400).json({});
    }
  } catch (err) {
    res.status(400).json({ err });
  }
};

const addOneCommon = (Model) => async (req, res) => {
  try {
    const { body } = req;
    const newUser = await new Model({ ...body });
    await newUser.save();

    if (newUser) {
      res.status(201).json({
        data: newUser
      });
    } else {
      res.status(400).json({
        message: 'Add failed.'
      });
    }
  } catch (err) {
    res.status(400).json({
      err
    });
  }
};

const editOneCommon = (Model) => async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Model.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });

    res.status(200).json({
      data: updated
    });
  } catch (err) {
    res.status(400).json({ err });
  }
};

const deleteOneCommon = (Model) => async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Model.deleteMany({ _id: id });

    // TODO: This is the correct way. Direct delete is for now.
    // const deleted = await Model.findOneAndUpdate(
    //   { _id: id },
    //   { flags: { isDeleted: true } },
    //   { new: true }
    // );

    res.status(200).json({
      data: deleted
    });
  } catch (err) {
    res.status(400).json({ err });
  }
};

const deleteAllCommon = (Model) => async (req, res) => {
  try {
    const deleted = await Model.deleteMany({});
    res.status(200).json({
      data: deleted
    });
  } catch (err) {
    res.status(400).json({ err });
  }
};

const generateAccessTokenCommon = (Model) => async (req, res) => {
  try {
    const { tokenData, token } = req.userTokenData;
    const { id } = tokenData;
    console.log(id);
    const userFind = await Model.findById({ _id: id }).select('-password');
    console.log(userFind);
    res.status(200).json({
      code: 200,
      access_token: token,
      status: 'Ok',
      user: userFind,
      userType: userFind.userType
    });
  } catch (err) {
    return res
      .status(500)
      .json({ code: 500, status: 'Internal server error', message: err.message });
  }
};

const signInCommon = (Model) => async (req, res) => {
  try {
    const {
      body: { email, password }
    } = req;
    const foundUser = await Model.findOne({ email }).lean();

    if (!foundUser) {
      res.status(400).json({
        code: 'ENF-0001'
      });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, foundUser.password);

    if (!passwordMatch) {
      res.status(400).json({
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
        status: 'Ok',
        token,
        userType: foundUser.userType,
        data: {
          ...foundUser,
          password: ''
        }
      });
    }
  } catch (err) {
    res.status(400).json({
      err
    });
  }
};

const registerCommoon = (Model) => async (req, res) => {
  try {
    const { body } = req;
    const { email } = body;

    const userFound = await Model.findOne({ email }).lean();

    if (userFound) {
      return res
        .status(400)
        .json({ code: 400, status: 'Bad request', message: 'Email suda terdaftar' });
    }

    if (!body) return res.json({ message: 'Semua field harus diisi' });

    const passwordHash = await bcrypt.hash(body.password, 12);

    const newStudent = await new Model({
      ...body,
      password: passwordHash
    });

    if (newStudent) {
      sendOTPVerificationEmail(newStudent, newStudent, res);
    }
  } catch (err) {
    return res.json({ code: 500, status: 'Internal server error', message: err.message });
  }
};

const emailCheckCommon = (Model) => async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) return res.json({ message: 'Email belum terisi' });

    if (!validateEmail(email)) return res.json({ message: 'Email atau password anda salah' });

    const user = await Model.findOne({ email }).lean();

    if (user) {
      return res.status(400).json({
        code: 400,
        status: 'Bad Request',
        errors: {
          email: 'An account with that email address already exists. Please use a unique email'
        }
      });
    } else {
      return res.status(200).json({
        code: 200,
        status: 'Ok',
        message: 'Login berhasil'
      });
    }
  } catch (err) {
    return res.json({ code: 500, status: 'Internal server error', message: err.message });
  }
};

const inputPasswordCommon = (Model) => async (req, res) => {
  try {
    const { userId, password, passwordConfirm } = req.body;

    if (password.length < 6) return res.json({ message: 'Password minimal 6 karakter' });

    const userFind = await Model.findById({ _id: userId });

    if (userFind.flags.isVerified) {
      // input login
      if (!userFind)
        return res.status(400).json({
          code: 400,
          status: 'Bad Request',
          errors: {
            email: 'Invalid email or password'
          }
        });

      const isMatch = await bcrypt.compare(password, userFind.password);
      if (!isMatch)
        return res.status(400).json({
          code: 400,
          status: 'Bad Request',
          errors: {
            email: 'Invalid email or password'
          }
        });

      const access_token = createAccessToken({
        id: userId,
        userType: userFind.userType
      });

      console.log(userFind, 'user');

      res.status(200).json({
        code: 200,
        status: 'Ok',
        message: 'Login success',
        access_token,
        user: {
          ...userFind._doc,
          password: ''
        },
        userType: userFind._doc.userType
      });
    } else {
      // input first login

      if (password !== passwordConfirm)
        return res.status(400).json({
          code: 400,
          status: 'Bad Request',
          errors: {
            password: 'Password is not match'
          }
        });

      const passwordHash = await bcrypt.hash(password, 12);

      await Model.updateOne({ _id: userId }, { verified: true, password: passwordHash });

      res.status(200).json({
        code: 200,
        status: 'Ok',
        messaga: 'Please login'
      });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ code: 500, status: 'Internal server error', message: err.message });
  }
};

const verifyOtpCommon = (Model) => async (req, res) => {
  try {
    let { userId, otp, newUser } = req.body;
    if (!userId || !otp) {
      throw Error('Kode otp tidak boleh kosong');
    } else {
      const EmailOTPVerificationRecords = await EmailOTPVerification.find({
        userId
      });
      if (EmailOTPVerificationRecords.length <= 0) {
        // no record found
        throw new Error('Akun anda telah terverifikasi, silahkan login');
      } else {
        // user otp record exist
        const { expiresdAt } = EmailOTPVerificationRecords[0];
        const hashedOTP = EmailOTPVerificationRecords[0].otp;

        if (expiresdAt < Date.now()) {
          // user otp record has expired
          await EmailOTPVerification.deleteMany({ userId });
          throw new Error('Kode OTP telah expire, silahkan registrasi ulang');
        } else {
          const validOTP = await bcrypt.compare(otp, hashedOTP);

          if (!validOTP) {
            // otp is wrong
            throw new Error('Kode OTP tidak sesuai, silahkan check email anda');
          } else {
            const { email } = newUser;
            const user = await Model.findOne({ email });

            if (!user) {
              // success
              await EmailOTPVerification.deleteMany({ userId });

              newUser.flags.isVerified = true;

              const savedStudent = await new Model(newUser);

              savedStudent.save();

              res.status(200).json({
                code: 200,
                status: 'Ok',
                message: 'Account verified'
              });
            } else {
              res.status(400).json({
                code: 400,
                status: 'Bad Request',
                errors: {
                  email:
                    'An account with that email address already exists. Please use a unique email'
                }
              });
            }
          }
        }
      }
    }
  } catch (err) {
    return res
      .status(500)
      .json({ code: 500, status: 'Internal server error', message: err.message });
  }
};

// send otp verification
const sendOTPVerificationEmail = async (newStudent, { _id, email }, res) => {
  try {
    if (_id) await EmailOTPVerification.deleteMany({ userId: _id });

    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

    // mail options
    const mailOptions = {
      from: process.env.AUTH_EMAIL_OTP,
      to: email,
      subject: 'Verify Your Email',
      html: `<body style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
        <p style="margin:0;padding:0;padding-bottom:20px;line-height:1.6;font-family:'Rubik';color:#2d4f43;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;"/>
      </p>
        <table width="100%" style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
          <tbody style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
            <tr style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
              <td class="wrapper" width="600" align="center" style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;padding-left:10px;padding-right:10px;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                <table class="section header" cellpadding="0" cellspacing="0" width="600" style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:initial;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                  <tr style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                    <td class="column" style="padding:0;margin:0;border: 1px solid #c3cdc9;border-radius:8px;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                      <table style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                        <tbody style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                          <tr style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                            <td align="center" style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;padding-top: 64px;">
                              <img src="https://via.placeholder.com/161x48" style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;width:100%;display:block;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;width: 161px;">
                              <h2 style="margin:0;padding:0;padding-bottom:20px;line-height:1.6;font-family:'Rubik';color:#2d4f43;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;text-align: center; padding-top: 32px; padding-bottom: 3px;">One-Time Password (OTP)</h2>
                              <table style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;margin-bottom: 48px;">
                                <tbody style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                                  <tr style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                                    <td style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                                      <p style="margin:0;padding:0;padding-bottom:20px;line-height:1.6;font-family:'Rubik';color:#FFFFFF;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
                                        display: inline-block;
                                        border-radius: 50%;
                                        width: 18px;
                                        height: 18px;
                                        padding: 8px;
                                        background: #111399;
                                        font-size: 16px;
                                        text-align: center;
                                        line-height: 17px;">P</p>
                                    </td>
                                    <td style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;vertical-align: middle;">
                                      <p style="margin:0;padding:0;padding-bottom:20px;line-height:1.6;font-family:'Rubik';color:#2d4f43;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;padding: 0;">&nbsp;&nbsp;Plato</p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                            <td align="left" style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;border-top: 1px solid #c3cdc9; 
                              padding: 46px 54px 64px;">
                              <p style="margin:0;padding:0;padding-bottom:20px;line-height:1.6;font-family:'Rubik';color:#2d4f43;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important; font-weight: 600;text-align: left;">
                                Hello, ${email}!
                              </p>
                              <p style="margin:0;padding:0;padding-bottom:20px;line-height:1.6;font-family:'Rubik';color:#2d4f43;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;text-align: left;">
                                Enter the following OTP to finish logging in to PLATO
                              </p>
                              <p style="margin:0;padding:0;padding-bottom:20px;line-height:1.6;font-family:'Rubik';color:#2d4f43;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;font-weight: 600;font-size:24px;text-align: center;">
                                ${otp}
                              </p>
                              <p style="margin:0;padding:0;padding-bottom:20px;line-height:1.6;font-family:'Rubik';color:#2d4f43;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;text-align: left;">
                                Your OTP is only valid within one (1) minute. Please do not share this code with anyone.
                              </p>
                              <p style="margin:0;padding:0;padding-bottom:20px;line-height:1.6;font-family:'Rubik';color:#2d4f43;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;text-align: left;">
                                If you did not initiate this login, please contact admin immediately.
                                <br>
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                    <td class="column" style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                      <table style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;width: 100%; border-bottom: 1px solid #c3cdc9;">
                        <tbody style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                          <tr style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                            <td align="center" style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                              <p style="margin:0;padding:0;padding-bottom:20px;line-height:1.6;font-family:'Rubik';color:#2d4f43;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;font-size: 14px; padding-top: 32px;">This message was sent to <a href="#" style="font-family:'Rubik';color:#2d4f43;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">${email}</a>.</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>`
    };

    const saltRounds = 10;
    const hashedOTP = await bcrypt.hash(otp, saltRounds);
    const newOTPVerification = await new EmailOTPVerification({
      userId: _id,
      otp: hashedOTP,
      createdAt: Date.now(),
      expiresdAt: Date.now() + 30000 // 30 detik
    });

    await newOTPVerification.save();
    await otpVerification.sendMail(mailOptions);

    return res.status(200).json({
      code: 200,
      status: 'PENDING',
      message: 'OTP code sent, please open your email',
      userId: _id,
      email: email,
      userData: newStudent
    });
  } catch (err) {
    return res
      .status(500)
      .json({ code: 500, status: 'Internal server error', message: err.message });
  }
};

const forgotPasswordCommon = (Model) => async (req, res) => {
  try {
    let { email } = req.body;

    const user = await Model.findOne({ email: email });
    console.log(user);
    if (!user) {
      return res.status(400).json({
        code: 400,
        status: 'Bad Request',
        errors: {
          email: 'An account with that email address not exists'
        }
      });
    }

    const access_token = createAccessToken({
      id: user._id,
      userType: user.userType
    });

    let newToken = access_token.slice(0, 35);

    await user.updateOne({ resetPasswordLink: newToken });

    const mailOptions = {
      from: process.env.AUTH_EMAIL_FP,
      to: email,
      subject: 'Link Reset Password',
      html: `<body style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
      <p style="margin:0;padding:0;padding-bottom:20px;line-height:1.6;font-family:'Rubik';color:#2d4f43;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;"/>
    </p>
      <table width="100%" style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
        <tbody style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
          <tr style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
            <td class="wrapper" width="600" align="center" style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;padding-left:10px;padding-right:10px;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
              <table class="section header" cellpadding="0" cellspacing="0" width="600" style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:initial;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                <tr style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                  <td class="column" style="padding:0;margin:0;border: 1px solid #c3cdc9;border-radius:8px;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                    <table style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                      <tbody style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                        <tr style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                          <td align="center" style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;padding-top: 64px;">
                            <img src="https://via.placeholder.com/161x48" style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;width:100%;display:block;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;width: 161px;">
                            <h2 style="margin:0;padding:0;padding-bottom:20px;line-height:1.6;font-family:'Rubik';color:#2d4f43;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;text-align: center; padding-top: 32px; padding-bottom: 3px;">One-Time Password (OTP)</h2>
                            <table style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;margin-bottom: 48px;">
                              <tbody style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                                <tr style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                                  <td style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                                    <p style="margin:0;padding:0;padding-bottom:20px;line-height:1.6;font-family:'Rubik';color:#FFFFFF;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
                                      display: inline-block;
                                      border-radius: 50%;
                                      width: 18px;
                                      height: 18px;
                                      padding: 8px;
                                      background: #111399;
                                      font-size: 16px;
                                      text-align: center;
                                      line-height: 17px;">P</p>
                                  </td>
                                  <td style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;vertical-align: middle;">
                                    <p style="margin:0;padding:0;padding-bottom:20px;line-height:1.6;font-family:'Rubik';color:#2d4f43;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;padding: 0;">&nbsp;&nbsp;Plato</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                          <td align="left" style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;border-top: 1px solid #c3cdc9; 
                            padding: 46px 54px 64px;">
                            <p style="margin:0;padding:0;padding-bottom:20px;line-height:1.6;font-family:'Rubik';color:#2d4f43;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important; font-weight: 600;text-align: left;">
                              Hello, ${email}!
                            </p>
                            <p style="margin:0;padding:0;padding-bottom:20px;line-height:1.6;font-family:'Rubik';color:#2d4f43;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;text-align: left;">
                              Enter the following OTP to finish logging in to PLATO
                            </p>
                            <p style="margin:0;padding:0;padding-bottom:20px;line-height:1.6;font-family:'Rubik';color:#2d4f43;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;font-weight: 600;font-size:24px;text-align: center;">
                              ${process.env.CLIENT_URL}/forgotpassword/${user.userType}/${newToken}
                            </p>
                            <p style="margin:0;padding:0;padding-bottom:20px;line-height:1.6;font-family:'Rubik';color:#2d4f43;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;text-align: left;">
                              Your OTP is only valid within one (1) hour. Please do not share this code with anyone.
                            </p>
                            <p style="margin:0;padding:0;padding-bottom:20px;line-height:1.6;font-family:'Rubik';color:#2d4f43;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;text-align: left;">
                              If you did not initiate this login, please contact admin immediately.
                              <br>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                  <td class="column" style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                    <table style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;width: 100%; border-bottom: 1px solid #c3cdc9;">
                      <tbody style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                        <tr style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                          <td align="center" style="padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">
                            <p style="margin:0;padding:0;padding-bottom:20px;line-height:1.6;font-family:'Rubik';color:#2d4f43;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;font-size: 14px; padding-top: 32px;">This message was sent to <a href="#" style="font-family:'Rubik';color:#2d4f43;font-family:'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">${email}</a>.</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </body>`
    };

    await forgotPassword.sendMail(mailOptions);

    return res.status(200).json({
      code: 200,
      status: 'PENDING',
      message: 'The password reset link has been sent'
    });
  } catch (err) {
    return res
      .status(500)
      .json({ code: 500, status: 'Internal server error', message: err.message });
  }
};

const resetPasswordCommon = (Model) => async (req, res) => {
  try {
    const { token, password, passwordConfirm } = req.body;

    if (password !== passwordConfirm)
      return res
        .status(400)
        .json({ code: 400, status: 'Bad Request', message: 'Password is not match' });

    const user = await Model.findOne({ resetPasswordLink: token });

    if (!user) {
      return res.status(400).json({
        code: 400,
        status: 'Bad Request',
        errors: {
          password: 'Reset password failed'
        }
      });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    await user.updateOne({ password: hashPassword });

    return res.status(200).json({
      code: 200,
      status: 'Ok',
      message: 'Reset password success'
    });
  } catch (err) {
    return res
      .status(500)
      .json({ code: 500, status: 'Internal server error', message: err.message });
  }
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_KEY, {
    expiresIn: '30d'
  });
};

export {
  getAllCommon,
  getOneCommon,
  addOneCommon,
  editOneCommon,
  deleteOneCommon,
  deleteAllCommon,
  signInCommon,
  registerCommoon,
  emailCheckCommon,
  generateAccessTokenCommon,
  inputPasswordCommon,
  verifyOtpCommon,
  forgotPasswordCommon,
  resetPasswordCommon
};
