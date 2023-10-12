const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "sequelize_practice",
  "root",
  "GayuAK/&$*#!190506",
  {
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("database connected successfully.");
  })
  .catch((error) => {
    console.log(error);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user")(sequelize, DataTypes);
db.post = require("./post")(sequelize, DataTypes);
db.tag = require("./tag")(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Resync done.");
  })
  .catch((error) => {
    console.log(error);
  });

//if we want force true for specific database then we can add match.
//db.sequelize.sync({ force: true, match: /databaseName$/ })

//one to one
// db.user.hasOne(db.post, {
//   foreignKey: "user_id", //default userId
//   as: "postDetails", //alias (optional)
// });

//one to many
db.user.hasMany(db.post, {
  foreignKey: "user_id",
  as: "postDetails",
});

//one to one & one to many
db.post.belongsTo(db.user, {
  foreignKey: "user_id",
  as: "userDetails",
});

//many to many
db.post.belongsToMany(db.tag, {
  through: "page_tag", //common table name (required)
  // through: {
  //   model: db.pageBlog, //if we have made custom model
  // },
  // foreignKey: "post_id", //default postId
  // as: "tagList", //alias (optional)
});
db.tag.belongsToMany(db.post, {
  through: "page_tag", //common table name (required)
  // through: {
  //   model: db.pageBlog, //if we have made custom model
  // },
  // foreignKey: "tag_id", //default tagId
  // as: "postList", //alias (optional)
});

//scope
// db.user.addScope("checkMale", {
//   where: {
//     gender: "Male",
//   },
// });

// db.user.addScope("limitCheck", {
//   limit: 2,
// });

//polymorphic one to many
//(below tables are dummy. Just for understanding)
// db.image.hasMany(db.comment, {
//   foreignKey: "commentId",
//   constraints: false, //because comment has relation with two tables and we can not make only one foreign key
//   scope: {
//     commentType: "image",
//   },
// });

// db.video.hasMany(db.comment, {
//   foreignKey: "commentId",
//   constraints: false, //because comment has relation with two tables and we can not make only one foreign key
//   scope: {
//     commentType: "video",
//   },
// });

// db.comment.belongsTo(db.image, { foreignKey: "commentId", constraints: false });
// db.comment.belongsTo(db.video, { foreignKey: "commentId", constraints: false });

//polymorphic many to many
//(below tables are dummy. Just for understanding)
// db.image.belongsToMany(db.tag, {
//   through: {
//     model: db.tag_taggable,
//     unique: false,
//     scope: {
//       tagType: "image",
//     },
//   },
//   foreignKey: "taggableId",
//   constraints: false,
// });

// db.tag.belongsToMany(db.image, {
//   through: {
//     model: db.tag_taggable,
//     unique: false,
//     scope: {
//       tagType: "image",
//     },
//   },
//   foreignKey: "tagId",
//   constraints: false,
// });

// db.video.belongsToMany(db.tag, {
//   through: {
//     model: db.tag_taggable,
//     unique: false,
//     scope: {
//       tagType: "video",
//     },
//   },
//   foreignKey: "taggableId",
//   constraints: false,
// });

// db.tag.belongsToMany(db.video, {
//   through: {
//     model: db.tag_taggable,
//     unique: false,
//     scope: {
//       tagType: "video",
//     },
//   },
//   foreignKey: "tagId",
//   constraints: false,
// });

module.exports = { db, sequelize };
