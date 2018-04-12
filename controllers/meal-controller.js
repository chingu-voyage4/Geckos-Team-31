module.exports.meals_get = async function(req, res, next){
    if(!req.params) res.sendFile('index.html', {root: './views/'});
    
    const meals = await req.models.Meal.findAll({include: req.models.Restaurant}).catch(err => next(err));
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
