const adminControllers = {};

const getLogin = async (req, res, next) => {
  res.render("admin/login-admin");
};
adminControllers.getLogin = getLogin;

module.exports = adminControllers;
