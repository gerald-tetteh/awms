const homeControllers = {};

const getHome = async (req, res, next) => {
  res.render("home/index");
};
homeControllers.getHome = getHome;

module.exports = homeControllers;
