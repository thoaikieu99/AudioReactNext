const { Sequelize } = require("sequelize");
const { CountView, Audio } = require("../model");
const { Op } = require("sequelize");
const catchAsync = require("../ultils/catchAsync");
const getDayView = async () => {
  // var isoDateString = new Date().toLocaleDateString("en-US");

  // let newUser = await CountView.create({
  //   views: 1,
  //   dateView: isoDateString,
  //   audio_id: 1,
  // });
  // console.log(newUser);
  var dateOffset = 24 * 60 * 60 * 1000 * 1;
  var da = new Date() - dateOffset;
  var isoDateString = new Date().toLocaleDateString("en-US");
  let getOneAudio = await CountView.findAll({
    where: {
      dateView: {
        [Op.gte]: isoDateString,
      },
    },
  });
};

const getDayViews = catchAsync(async (req, res) => {
  let getNew = await CountView.findAndCountAll({
    include: [
      {
        model: Audio,
        attributes: [
          "slug",
          "title",
          "content",
          "trang_thai",
          "sotap",
          "image",
        ],
      },
    ],
    order: [["dateView", "ASC"]],

    limit: 12,
  });

  if (!getNew) {
    return next(new AppError("No user found with that ID", 404));
  }

  res.status(201).json({
    status: "success",
    data: getNew,
  });
});

module.exports = {
  getDayViews,
};
