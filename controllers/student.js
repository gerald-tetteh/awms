const studentControllers = {};

const getLogin = async (req, res, next) => {
  res.render("student/login-student");
};
studentControllers.getLogin = getLogin;

module.exports = studentControllers;
