/**
 * Created by lenovo on 1/21/2016.
 */
var Restaurant=require('../models/restaurant');


module.exports={
    findAllRestaurants:function(callback){

        Restaurant.find(function(err,restaurants){
            if(err)
            callback(err,null);

            callback(null,restaurants);

        })
    }
}
