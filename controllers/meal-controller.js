const Op = require('sequelize').Op;

module.exports.meals_get = async function(req, res, next){
    if(Object.keys(req.query).length === 0) 
        return res.sendFile('index.html', {root: './views/'});

    let restaurantWhereOptions = {address:{}};
    let mealWhereOptions = {};
    if(req.query.city)
        restaurantWhereOptions.address.city = {[Op.iLike]: `%${req.query.city}%`};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    if(req.query.type)
        restaurantWhereOptions.type = {[Op.iLike]: `%${req.query.type}%`};
    if(req.query.restaurant)
        restaurantWhereOptions.name = {[Op.iLike]: `%${req.query.restaurant}%`};
    if(req.query.meal)
        mealWhereOptions.name = {[Op.iLike]: `%${req.query.meal}%`};

    const meals = await req.models.Meal.findAll(
        {
            include: 
            {
                model: req.models.Restaurant,
                where: restaurantWhereOptions
            },
            where: mealWhereOptions
        },

    ).catch(err => next(err));
    return res.send(meals);
    
}
module.exports.meals_add = async function(req, res, next){
    let created;
    if(req.body.meals) 
        created = await req.models.Meal.bulkCreate(req.body.meals).catch(err => next(err));
    else if(req.body.meal) 
        created = await req.models.Meal.create(req.body.meal).catch(err => next(err));
    
    return res.send(created);
}
