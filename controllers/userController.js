const { db, sequelize } = require("../models");
const { Sequelize, Op, QueryTypes, DataTypes } = require("sequelize");
const queryInterface = sequelize.getQueryInterface();

const addUser = async (req, res) => {
  const { user: User, post: Post, tag: Tag } = db;

  // old create
  //   const data = await User.build({
  //     name: "Test",
  //     gender: "Male",
  //   });
  //   await data.save();

  // const data = await User.create({
  //   name: "Gayatri",
  //   email: "gayatri@gmail.com",
  //   gender: "Female",
  // });

  // update data when instance is opened
  //   data.name = "Gavravi";
  //   data.email = "gavravi@gmail.com";
  //   data.name = "Female";
  //   data.save();

  // update
  //   const data = await User.update(
  //     {
  //       email: "abhishekkolge96@gmail.com",
  //     },
  //     {
  //       where: {
  //         id: 2,
  //       },
  //     }
  //   );

  // delete
  //   const data = await User.destroy({
  //     where: {
  //       id: 1,
  //     },
  //   });

  // delete all entries in table (truncate)
  //   const data = await User.destroy({
  //     truncate: true,
  //   });

  // bulk insert
  //   const data = await User.bulkCreate([
  //     { name: "Gavravi", email: "gavravi@gmail.com", gender: "Female" },
  //     { name: "Abhishek", email: "abhishek@gmail.com", gender: "Male" },
  //   ]);

  // find All (array)
  // const data = await User.findAll();

  // find One (object)
  //   const data = await User.findOne();

  // insert specific fields
  // const data = await User.create(
  //   {
  //     name: "Gayatri",
  //     email: "gayatri@gmail.com",
  //     gender: "Female",
  //   },
  //   {
  //     fields: ["name"],
  //   }
  // );

  // get specific fields
  // const data = await User.findAll({
  //   attributes: ["name", "gender"],
  // });

  // get specific fields with different name
  // const data = await User.findAll({
  //   attributes: [
  //     ["name", "fullName"],
  //     ["email", "emailAddress"],
  //   ],
  // });

  //function
  // const data = await User.findAll({
  //   attributes: [
  //     ["name", "fullName"],
  //     ["email", "emailAddress"],
  //     [Sequelize.fn("count", Sequelize.col("name")), "nameCount"],
  //     [
  //       Sequelize.fn(
  //         "concat",
  //         Sequelize.col("email"),
  //         " ",
  //         Sequelize.col("name")
  //       ),
  //       "concat",
  //     ],
  //   ],
  // });

  //include & exclude
  // const data = await User.findAll({
  //   attributes: {
  //     exclude: ["created_at", "modified_at"],
  //     include: [[Sequelize.fn("count", Sequelize.col("email")), "emailCount"]],
  //   },
  // });

  //operator
  // const data = await User.findAll({
  //   where: {
  //     id: {
  //       [Op.gt]: 1,
  //     },
  //     email: {
  //       [Op.like]: "%@gmail.com",
  //     },
  //   },
  // });

  // order by
  // const data = await User.findAll({
  // order: [["name", "DESC"]],
  // order: ["name"], //default
  // limit: 3,
  // offset: 1,
  // group: ["gender"],
  // });

  // count
  // const data = await User.count();

  // find by primary key
  // const data = await User.findByPk(3);

  //find and count all
  // const data = await User.findAndCountAll();

  // find or create
  // const [data, created] = await User.findOrCreate({
  //   where: {
  //     email: "test2@gmail.com",
  //   },
  //   defaults: {
  //     name: "test",
  //     email: "test2@gmail.com",
  //     gender: "Unknown",
  //   },
  // });

  //raw query
  // const data = await db.sequelize.query(
  //   "SELECT * FROM users WHERE gender =:gender",
  //   {
  //     type: QueryTypes.SELECT,
  //     replacements: {
  //       gender: "male",
  //     },
  //   }
  // );

  // const data = await db.sequelize.query(
  //   "SELECT * FROM users WHERE gender = ?",
  //   {
  //     type: QueryTypes.SELECT,
  //     replacements: ["male"],
  //   }
  // );

  // const data = await db.sequelize.query(
  //   "SELECT * FROM users WHERE gender IN(:gender)",
  //   {
  //     type: QueryTypes.SELECT,
  //     replacements: {
  //       // gender: "male",
  //       gender: ["male", "female"],
  //     },
  //   }
  // );

  // const data = await db.sequelize.query(
  //   "SELECT * FROM users WHERE email LIKE :searchEmail",
  //   {
  //     type: QueryTypes.SELECT,
  //     replacements: {
  //       searchEmail: "%@gmail.com",
  //     },
  //   }
  // );

  //replacement value will be visible in sql query

  //bind value will not be visible in sql query
  // const data = await db.sequelize.query(
  //   "SELECT * FROM users WHERE gender = $gender",
  //   {
  //     type: QueryTypes.SELECT,
  //     bind: {
  //       gender: "male",
  //     },
  //   }
  // );

  // create post
  // const data = await Post.create({
  //   title: "Gayatri's Post",
  //   user_id: 2,
  // });

  // one to one
  // const data = await User.findAll({
  //   attributes: ["name", "email", "gender"],
  //   include: { model: Post, as: "postDetails", attributes: ["title"] }, //array if multiple models
  // });

  // const data = await Post.findAll({
  //   attributes: ["title"],
  //   include: { model: User, as: "userDetails", attributes: ["name"] }, //array if multiple models
  // });

  // one to many
  // const data = await User.findAll({
  //   attributes: ["name", "email", "gender"],
  //   include: { model: Post, as: "postDetails", attributes: ["title"] }, //array if multiple models
  // });

  // const data = await Post.findAll({
  //   attributes: ["title"],
  //   include: { model: User, as: "userDetails", attributes: ["name"] }, //array if multiple models
  // });

  //many to many
  // const data = await Post.findAll({
  //   include: { model: Tag },
  // });

  // const data = await Tag.findAll({
  //   include: { model: Post },
  // });

  //scope
  // const data = await User.scope("checkMale").findAll(); //single scope (defined in model index)
  // const data = await User.scope(["checkMale", "limitCheck"]).findAll(); //multiple scopes (defined in model index)

  //polymorphic one to many
  // const data = await Image.findAll({
  //   include: Comment,
  // });

  // const data = await Video.findAll({
  //   include: Comment,
  // });

  // const data = await Comment.findAll({
  //   include: Image,
  // });

  // const data = await Comment.findAll({
  //   include: Video,
  // });

  //lazy loading
  // const user = await User.findOne({
  //   where: { id: 1 },
  // });

  // const post = await user.getPostDetails();

  // const data = {
  //   user,
  //   post,
  // };

  //eager loading
  // const data = await User.findOne({
  //   where: { id: 1 },
  //   include: "postDetails", //we can add alias directly
  // });

  //paranoid
  // when we delete a row, deletedAt column gets a date and result will not show up in query result

  // when we need deleted data in result
  // const data = await User.findAll({
  //   paranoid: false,
  // });

  //restore deleted data
  // const data = await User.restore({
  //   where: { id: 1 },
  // });

  //transaction
  // const t = await sequelize.transaction();
  // try {
  //   const user = await User.create(
  //     {
  //       name: "test",
  //       email: "test@gmail.com",
  //       gender: "Unknown",
  //     },
  //     {
  //       transaction: t,
  //     }
  //   );

  //   t.commit();
  // } catch (error) {
  //   t.rollback();
  // }

  //query Interface
  //create table
  // queryInterface.createTable("Test", {
  //   name: DataTypes.STRING,
  // });

  //add column
  // queryInterface.addColumn("Test", "email", {
  //   type: DataTypes.STRING,
  // });

  //alter column
  // queryInterface.changeColumn("Test", "email", {
  //   type: DataTypes.STRING,
  //   defaultValue: "test@gmail.com",
  // });

  //delete column
  // queryInterface.removeColumn("Test", "email");

  //delete table
  // queryInterface.dropTable("Test");

  //remove unwanted nested object from result
  // const game = await Game.findOne({
  //   where: {
  //     name: "Winter Showdown",
  //   },
  //   include: {
  //     model: GameTeam,
  //     include: [
  //       {
  //         model: Player,
  //         through: { attributes: [] }, // Hide unwanted `PlayerGameTeam` nested object from results
  //       },
  //       Team,
  //     ],
  //   },
  // });

  // res.status(200).json("Query is successful");
  res.status(200).json(data);
};

module.exports = { addUser };
