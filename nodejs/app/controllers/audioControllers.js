const { Audio } = require("../model");
const catchAsync = require("../ultils/catchAsync");

const getAll = catchAsync(async (req, res) => {
  let getAllAudio = await Audio.findAll();
  res.status(200).json({
    status: "success",
    data: {
      audio: getAllAudio,
    },
  });
});

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

  res.status(201).json({
    status: "success",
    data: {
      user: getone,
    },
  });
});

const getNewAudio = catchAsync(async (req, res, next) => {
  let getNew = await Audio.findAndCountAll({
    order: [["date", "ASC"]],
    limit: 42,
    offset: 42 * 1,
  });

  const ListAudio = getNew.rows.map((value) => {
    const { id, date, modified, link_audio, metalink, ...rest } =
      value.dataValues;
    return rest;
  });

  const list = {
    count: getNew.count,
    ListAudio,
  };

  if (!getNew) {
    return next(new AppError("No user found with that ID", 404));
  }

  res.status(201).json({
    status: "success",
    data: list,
  });
});

module.exports = {
  getAll,
  getAudio,
  getNewAudio,
};
