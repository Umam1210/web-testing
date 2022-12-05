import bcrypt from 'bcryptjs';
const saltRounds = 12;

export default (password) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};
