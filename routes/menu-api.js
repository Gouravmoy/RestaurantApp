/**
 * Created by lenovo on 1/20/2016.
 */
var express=require('express');
var router=express.Router();
var menuDao=require('../daos/menu-dao');

router.route('/menu-overview')
    // GET all  menu over view
    .get(function(req,res){
        menuDao.findAllMenuOverview(function(err,menuOverviewList){
            if(err){
                return res.status(500).send(err);
            }
            return res.send(menuOverviewList);
        });
    })
    //Create a Menu over view
    .post(function(req,res){

    });

router.route('/menu-overview/id/:id')

    // Get a menu overview by if
    .get(function(req,res){


        menuDao.findMenuOverviewById(req.params.id,function(err,menuOverviewList){

            if(err){
                console.log(err);
                return   res.status(500).send(err);
            }


            return res.send(menuOverviewList);


        })

    })

    // Update a menu overview
    .put(function(req,res){

    })

    // delete a menu overview
    .delete(function(req,res){

    });


router.route('/menu-details')

    // get all menu deatils
    .get(function(req,res){

        menuDao.findAllMenuDetails(function(err,menuDetailsList){

            if(err){
                return res.status(500).send(err);
            }

            return res.send(menuDetailsList);
        })
    })
    // create a menu details
    .post(function(req,res){

    });

router.route('/menu-details/id/:id')

    // Get a menu details by id
    .get(function(req,res){

        menuDao.findMenuDetailsById(req.params.id,function(err,menuDetails){
            if(err){
                return res.status(500).send(err);
            }

           return res.send(menuDetails);
        })


    })
    // update a menu details by id
    .put(function(req,res){

    })
    //delete a menu details by id
    .delete(function(){

    });

router.route('/menu-details/id/:id/category/:category')

    // get a category by menudetails id and category name
    .get(function(req,res){

        menuDao.findMenuCategoryBymIdmCategory(req.params.id,req.params.category,function(err,menuCategory){

            if(err){
                return res.status(500).send(err);
            }

            return res.send(menuCategory);
        })
    })

    // update a category by menudetails id and category name
    .put(function(req,res){

    })

    //delete a category by menudetails id and category name
    .delete(function(req,res){

    });

router.route('/menu-details/id/:id/category/:category/subcategory/:sub_category')

// Get subcategory by menudetails id ,category name and subcategory name
    .get(function(req,res){

        menuDao.findMenuCategoryBymIdmCategorymSubCategory(req.params.id,req.params.category,req.params.sub_category,function(err,menuSubCategory){

            if(err){
                return res.status(500).send(err);
            }

            return res.send(menuSubCategory);
        })
    })

    .put(function(req,res){

    })
    .delete(function(req,res){

    });


module.exports=router;





