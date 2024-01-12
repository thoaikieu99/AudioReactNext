const { DataTypes } = require("sequelize");

const creatModelCountView = (sequelize) => {
  const CountView = sequelize.define(
    "CountView",
    {
      views: {
        type: DataTypes.INTEGER,
      },
      dateView: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "CountViews",
      timestamps: false,
    }
  );
  let Audio = sequelize.model("Audio");

  Audio.hasMany(CountView, { foreignKey: "audio_id" });

  return CountView;
};
module.exports = creatModelCountView;
