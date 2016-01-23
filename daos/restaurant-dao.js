/**
 * Created by lenovo on 1/21/2016.
 */
var Restaurant=require('../models/restaurant');


module.exports={
    findAllRestaurants:function(callback){

        Restaurant.find(function(err,restaurantList){
            if(err){
                console.log(err);
                callback(err,null);
            }
            callback(null,restaurantList);

        });
    },


    findRestaurantByBeaconInstance:function(beacon_instance,callback){

        Restaurant.find({"beacon_instance":beacon_instance},function(err,restaurantList){
            if(err){
                callback(err,null);
            }

            callback(null,restaurantList);

        })

    },

    findRestaurantById:function(id,callback){

        Restaurant.find({"_id":id},function(err,restaurantList){

            if(err){

                callback(err,null);
            }

            callback(null,restaurantList);
        })
    }

};
