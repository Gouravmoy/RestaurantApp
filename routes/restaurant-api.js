/**
 * Created by lenovo on 1/15/2016.
 */
/**
 * Created by lenovo on 1/15/2016.
 */
var express = require('express');
var router = express.Router();

var restaurantDao=require('../daos/restaurant-dao');


router.route('/restaurant')

    //get all restaurants
    .get(function(req,res){

        restaurantDao.findAllRestaurants(function(err,restaurantList){

            if(err){
                console.error(err);
                return res.status(500).send(err);
            }

            return res.send(restaurantList);
        });

    })

    //create a restaurants
    .post(function(req,res){
        res.send("Create a restaurant");
    });

router.route('/restaurant/id/:id')


    //get a specific restaurant
    .get(function(req,res){

        restaurantDao.findRestaurantById(req.params.id,function(err,restaurantList){

            if(err){

                console.log(err);
                return res.status(500).send(err);
            }


            return res.send(restaurantList);

        })

    })

    // update a specific restaurant
    .put(function(req,res){

    })

    // delete a specific restaurant
    .delete(function(req,res){

    });

router.route('/restaurant/beacon/:beaconId')

    // get a specific restaurant by beacon id
    .get(function(req,res){

        restaurantDao.findRestaurantByBeaconInstance(req.params.beaconId,function(err,restaurantList){

            if(err){
                console.log(err);
               return res.status(500).send(err);
            }


            return res.send(restaurantList);
        })

    })
    // Add a beacon to a restaurant
    .put(function(req,res){

    })
    // Detach a beacon from a restaurant
    .delete(function(req,res){

    });

module.exports = router;
