module.exports.restaurants_get = async function(req, res, next){
    let restaurants;

    if(req.params.name)
        restaurants = await req.models.Restaurant.findAll().catch(err => next(err));
    else restaurants = await req.models.Restaurant.findAll({where: {name: req.params.name}}).catch(err => next(err));
    
    return res.send(restaurants);
}
module.exports.restaurants_add = async function(req, res, next){
    let created;
    if(req.body.restaurants) 
        created = await req.models.Restaurant.bulkCreate(req.body.restaurants).catch(err => next(err));
    else if(req.body.restaurant)
        created = await req.models.Restaurant.create(req.body.restaurant).catch(err => next(err));
    
    return res.send(created);
}
