/**
 * Created by lenovo on 1/20/2016.
 */
var express=require('express');
var router=express.Router();

router.route('/menuoverview')
    // GET all  menu over view
    .get(function(req,res){
        res.send("GEt all menu overview");
    })
    //Create a Menu over view
    .post(function(req,res){

    });

router.route('/menuoverview/:id')

    // Get a menu overview by if
    .get(function(req,res){

    })

    // Update a menu overview
    .put(function(req,res){

    })

    // delete a menu overview
    .delete(function(req,res){

    });


router.route('/menudetails')

    // get all menu deatils
    .get(function(req,res){

    })
    // create a menu details
    .post(function(req,res){

    });

router.route('/menudeatials/:id')

    // Get a menu details by id
    .get(function(req,res){

    })
    // update a menu details by id
    .put(function(req,res){

    })
    //delete a menu details by id
    .delete(function(){

    });

router.route('/menudetails/:id/category/:category')

    // get a category by menudetails id and category name
    .get(function(req,res){

    })

    // update a category by menudetails id and category name
    .put(function(req,res){

    })

    //delete a category by menudetails id and category name
    .delete(function(req,res){

    });

router.route('/menudetails/:id/category/:category/subcategory/:subcategory')

// Get subcategory by menudetails id ,category name and subcategory name
    .get(function(req,res){

    })

    .put(function(req,res){

    })
    .delete(function(req,res){

    });


module.exports=router;





