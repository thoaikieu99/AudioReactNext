const catchAsync = require("../ultils/catchAsync");
const AppError = require("../ultils/appErrors");
const { Categorie } = require("../model");

const getShow = catchAsync(async (req, res) => {
  const getall = await Categorie.findAll({
    where: { show: 1 },
  });
  res.status(200).json({
    status: "success",
    data: {
      theLoai: getall,
    },
  });
});

module.exports = {
  getShow,
};
