// middleware for doing role-based permissions
export default function permit(permittedRoles) {
  return (req, res, next) => {
    const { userTokenData } = req;
    if (userTokenData && permittedRoles[0] == 'ALL') {
      next();
    } else if (
      userTokenData &&
      permittedRoles &&
      permittedRoles.filter((e) => userTokenData.roles.indexOf(e) !== -1).length > 0
    ) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden.' });
    }
  };
}
