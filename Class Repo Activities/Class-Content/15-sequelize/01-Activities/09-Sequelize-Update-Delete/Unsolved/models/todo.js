module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    text: {
    type: DataTypes.STRING,
    validate: {
      notNull: true,
      len: [1, 140]
    }
  },
  complete: DataTypes.BOOLEAN,
  });
  return Todo;
};
