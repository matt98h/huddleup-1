// Creating our Manager model
module.exports = function (sequelize, DataTypes) {
  const Manager = sequelize.define("Manager", {
    // The email cannot be null, and must be a proper email before creation
    displayName: {
      type: DataTypes.STRING,
    },
    uid: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  Manager.associate = function (models) {

    Manager.hasOne(models.Roster, {
      onDelete: "cascade",
      foreignKey: "ManagerId",
      sourceKey: "uid"
    });
  };
  return Manager;
};
