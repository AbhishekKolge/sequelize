const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
        set(value) {
          this.setDataValue("name", `${value} testing setter`);
        },
        get() {
          return `${this.getDataValue("name")} testing getter ${this.email}`;
        },
      },
      email: {
        type: DataTypes.STRING,
        // defaultValue: "test@gmail.com",
        allowNull: false,
        unique: true,
      },
      gender: {
        type: DataTypes.STRING,
        validate: {
          // equals: "male",
          // equals: {
          //   args: "male",
          //   msg: "Please enter only male",
          // },
          // isIn: [["male", "female"]],
          // isIn: {
          //   args: [["male", "female"]],
          //   msg: "Please enter male or female",
          // },
        },
      },
    },
    {
      //   timestamp: false,
      //   createdAt: false,
      //   updatedAt: false,
      createdAt: "created_at",
      updatedAt: "modified_at",
      //   tableName: "userData",
      // underscored: true
      // paranoid: true //enables soft delete and deletedAt column gets added
      // deletedAt: 'deleted_at'
      //define hooks inside model
      // hooks: {
      //   beforeValidate: (user, options) => {
      //     user.name = "testing before validate hook";
      //   },
      //   afterValidate: (user, options) => {
      //     user.name = "testing after validate hook";
      //   },
      // },
    }
  );

  // define hooks anywhere

  // first method
  // User.addHook("beforeValidate", "customNameBeforeValidate", (user, options) => {
  //   user.name = "testing before validate hook which is defined anywhere";
  // });

  // second method
  // User.beforeValidate("customNameBeforeValidate", (user, options) => {
  //   user.name = "testing before validate hook which is defined anywhere";
  // });

  //remove hook
  // User.removeHook("beforeValidate", "customNameBeforeValidate");

  return User;
};

module.exports = userModel;

//disable both createdAt and updatedAt columns with timestamp or we can disable it individually.
