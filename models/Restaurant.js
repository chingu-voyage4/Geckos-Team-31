module.exports = function(sequelize, DataTypes){
    const Restaurant = sequelize.define('restaurants', {
        name: DataTypes.STRING,
        address: DataTypes.JSONB,
        type: DataTypes.STRING
    }, {
        underscored: true
    });

    Restaurant.sync({alter: true});
    return Restaurant;
}