const postModel = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "post",
    {
      title: DataTypes.STRING,
    },
    {
      createdAt: "created_at",
      updatedAt: "modified_at",
    }
  );

  return Post;
};

module.exports = postModel;
