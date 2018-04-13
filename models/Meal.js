module.exports = function(sequelize, DataTypes){
    const Meal = sequelize.define('meals', {
        restaurant_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        price: DataTypes.INTEGER
    }, {
        underscored: true
    });

    Meal.sync({alter: true});
    return Meal;
}