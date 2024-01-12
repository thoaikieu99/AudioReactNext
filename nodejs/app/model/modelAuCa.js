const { DataTypes } = require("sequelize");

const creatModelAuCa = (sequelize) => {
  const AuCa = sequelize.define(
    "Auca",
    {},
    {
      tableName: "Aucas",
      timestamps: false,
    }
  );
  let Audio = sequelize.model("Audio");
  let Categorie = sequelize.model("Categorie");
  Categorie.hasMany(AuCa, { foreignKey: "categorie_id" });

  Audio.hasMany(AuCa, { foreignKey: "audio_id" });

  return AuCa;
};
module.exports = creatModelAuCa;
