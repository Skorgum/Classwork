module.exports = function (sequelize, DataTypes) {
    const todo = sequelize.define("todo", {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    });
    return todo;
}