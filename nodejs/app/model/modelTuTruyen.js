const { DataTypes } = require("sequelize");

const creatModelTuTruyen = (sequelize) => {
  const TuTruyen = sequelize.define(
    "TuTruyen",
    {
      recaudio: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rectile: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      startspeed: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      startime: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: "TuTruyens",
      timestamps: true,
    }
  );
  let Audio = sequelize.model("Audio");
  let User = sequelize.model("User");
  Audio.hasMany(TuTruyen, { foreignKey: "audio_id" });
  User.hasMany(TuTruyen, { foreignKey: "user_id" });
  return TuTruyen;
};
module.exports = creatModelTuTruyen;
