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
        
        restaurantDao.findAllRestaurants(function(err,resturants){

            if(err){
                console.error(err);
                return res.status(500).send(err);
            }

            return res.send(resturants);
        });

    })

    //create a restaurants
    .post(function(req,res){
        res.send("Create a restaurant");
    });

router.route('/restaurant/:id')


    //get a specific restaurant
    .get(function(req,res){

    })

    // update a specific restaurant
    .put(function(req,res){

    })

    // delete a specific restaurant
    .delete(function(req,res){

    });

router.route('restaurant/beacon/:beaconId')

    // get a specific restaurant by beacon id
    .get(function(req,res){

    })
    // Add a beacon to a restaurant
    .put(function(req,res){

    })
    // Detach a beacon from a restaurant
    .delete(function(req,res){

    });

module.exports = router;
