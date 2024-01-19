const { Audio, CountView } = require("../model");
const catchAsync = require("../ultils/catchAsync");
const AppError = require("../ultils/appErrors");
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
      audio: getone,
    },
  });
});

const getNewAudio = catchAsync(async (req, res, next) => {
  const isoDateString = new Date().toLocaleDateString("en-US");
  let last = await CountView.findOne({
    order: [["dateView", "DESC"]],
  });
  if (Date.now() - last.dateView > 43200 * 1000) {
    await fetch(
      "http://kianai99.io.vn/get/v1/getAudio/web/index.php?r=site%2Fgetmodified"
    );
  }

  let page = req?.query?.page ? req.query.page : 0;
  let getNew = await Audio.findAndCountAll({
    order: [["date", "ASC"]],
    attributes: ["slug", "title", "content", "trang_thai", "sotap", "image"],
    limit: 42,
    offset: 42 * page,
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
