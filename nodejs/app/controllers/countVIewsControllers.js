const { Sequelize } = require("sequelize");
const { CountView, Audio } = require("../model");
const { Op } = require("sequelize");
const catchAsync = require("../ultils/catchAsync");
const isoDateString = new Date().toLocaleDateString("en-US");
const datea = Date.parse(isoDateString);

const getOne = async (audio_id, isoDateString) => {
  let getOneView = await CountView.findOne({
    where: {
      dateView: isoDateString,
      audio_id,
    },
  });
  return getOneView;
};

const createViews = async (audio_id, isoDateString) => {
  let newViews = await CountView.create({
    dateView: isoDateString,
    views: 1,
    audio_id,
  });
  return newViews;
};

const addViews = catchAsync(async (req, res) => {
  let getoOne = await getOne(req.body.audio_id, datea);

  if (!getoOne) {
    getoOne = createViews(req.body.audio_id, datea);
  } else {
    getoOne = await getoOne.update({
      views: getoOne.views + 1,
    });
  }
});

const findView = async (dateFind) => {
  let getNew = await CountView.findAndCountAll({
    where: {
      dateView: {
        [Sequelize.Op.gte]: datea - dateFind,
      },
    },
    group: ["audio_id"],
    attributes: [
      "audio_id",
      [Sequelize.fn("sum", Sequelize.col("views")), "views_count"],
    ],
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
    order: [["views_count", "desc"]],
    limit: 12,
  });

  return getNew;
};

const getAllView = catchAsync(async (req, res) => {
  let getAll = await findView(datea);

  res.status(200).json({
    status: "success",
    data: getAll.rows,
  });
});

const getMonthView = catchAsync(async (req, res) => {
  let month = 30 * 24 * 60 * 60 * 1000;
  let getMonth = await findView(month);

  res.status(200).json({
    status: "success",
    data: getMonth.rows,
  });
});

const getYearView = catchAsync(async (req, res) => {
  let year = 365 * 24 * 60 * 60 * 1000;
  let getYear = await findView(year);

  res.status(200).json({
    status: "success",
    data: getYear.rows,
  });
});

const getDayViews = catchAsync(async (req, res) => {
  let getDay = await findView(0);

  res.status(200).json({
    status: "success",
    data: getDay.rows,
  });
});

module.exports = {
  getDayViews,
  addViews,
  getMonthView,
  getYearView,
  getAllView,
};
