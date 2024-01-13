const { Audio } = require("../model");
const catchAsync = require("../ultils/catchAsync");

const getOne = async (slug) => {
  let getOneAudio = await Audio.findOne({
    where: {
      slug,
    },
  });
  return getOneAudio;
};

const getAudio = catchAsync(async (req, res, next) => {
  let getone = await getOne(req.params.slug);

  if (!getone) {
    return next(new AppError("No audio found with that slug", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      user: getone,
    },
  });
});

const getNewAudio = catchAsync(async (req, res, next) => {
  let getNew = await Audio.findAndCountAll({
    order: [["date", "ASC"]],
    attributes: ["slug", "title", "content", "trang_thai", "sotap", "image"],
    limit: 42,
    offset: 42 * 1,
  });

  if (!getNew) {
    return next(new AppError("No audio found", 404));
  }

  res.status(200).json({
    status: "success",
    data: getNew,
  });
});

module.exports = {
  getAudio,
  getNewAudio,
};
