/**
 * Created by lenovo on 1/21/2016.
 */
var mongoose=require('mongoose');
var MenuOverviews=require('../models/menu-overview');
var MenuDetails=require('../models/menu-detail');


module.exports={

    findAllMenuOverview: function(callback){
        MenuOverviews.find(function(err,menuOverviewList){
            if(err){
                console.log(err);
                callback(err,null);
            }

            callback(null,menuOverviewList);
        })
    },
    findMenuOverviewById:function(id,callback){

        /*MenuOverviews.aggregate([{$match:{ _id : mongoose.Types.ObjectId(id) }}],function(err,menuOverview){
            if(err){
                console.log(err);
                callback(err,null);
            }

            callback(null,menuOverview);
        });*/
        MenuOverviews.findOne({_id:id},function(err,menuOverview){
            if(err){
                console.log(err);
                callback(err,null);
            }

            callback(null,menuOverview);
        })
    },

    findAllMenuDetails: function(callback){

        MenuDetails.find(function(err,menuDetailsList){

            if(err){
                console.log(err);
                callback(err,null);
            }

            callback(null,menuDetailsList);
        })

    },

    findMenuDetailsById:function(id,callback){

        MenuDetails.findOne({"_id":id},function(err,menuDetails){

            if(err){
                console.log(err);
                callback(err,null);
            }

            callback(null,menuDetails);
        })
    },

    findMenuCategoryBymIdmCategory:function(id,category,callback){

        MenuDetails.find({"_id":id},{"menu_detail":{$elemMatch:{"category":category}}},function(err,menuCategory){

            if(err){
                console.log(err);
                callback(err,null);
            }

            callback(null,menuCategory);

        })
    },
    findMenuCategoryBymIdmCategorymSubCategory :function(id,category,sub_category,callback){

        console.log("id "+id +"category "+category+ " sub_category "+sub_category);
        MenuDetails.aggregate([
            {$match:{"_id":mongoose.Types.ObjectId(id)}},
            {"$unwind":"$menu_detail"},
            {$match:{"menu_detail.category":category}},
            {"$unwind":"$menu_detail.sub_category"},
            {$match:{"menu_detail.sub_category.sub_category_name":sub_category}}
        ],function(err,menuSubCategory){

            if(err){
                console.log(err);
                callback(err,null);
            }

            callback(null,menuSubCategory)
        })
    }



};