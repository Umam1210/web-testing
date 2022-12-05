import jwt from 'jsonwebtoken';

export default async function authorize(req, res, next) {
  try {
    let token = req.headers.authorization ? req.headers.authorization.replace('Bearer ', '') : null;

    if (token) {
      const tokenData = await jwt.verify(token, process.env.JWT_KEY);
      req.userTokenData = { tokenData, token };

      console.log(req.userTokenData);

      next();
    } else {
      res.status(400).json({
        message: 'Missing token.'
      });
    }
  } catch (err) {
    res.status(400).json({
      message: 'Misconfigured token.',
      err
    });
  }
}
