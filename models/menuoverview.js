/**
 * Created by lenovo on 1/20/2016.
 */
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var menuOverView=new Schema({
    _id:Schema.type.ObjectId,
    menu_overview:[{"category":String,"sub_category":[String]}]
});

var MenuOverView=mongoose.module('MenuOverView',menuOverView);
module.exports=MenuOverView;