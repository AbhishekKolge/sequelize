const tagModel = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "tag",
    {
      name: DataTypes.STRING,
    },
    {
      createdAt: "created_at",
      updatedAt: "modified_at",
    }
  );

  return Tag;
};

module.exports = tagModel;
