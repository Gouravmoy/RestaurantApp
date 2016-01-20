/**
 * Created by lenovo on 1/15/2016.
 */


var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var MenuOverView=require('./menuoverview');


var restaurantSchema=new Schema({
    _id:Schema.type.ObjectId,
    resturant_name: String,
    resturant_image:{
        thumbnail:String,
        "profile":String
    },
    beacon_ids:[String],
    address:{
        street:String,
        city:String,
        dist:String,
        pin:String,
        state:String

    },
    resturant_menu: {type:Schema.type.ObjectId,ref:MenuOverView}

});


var Restaurant=mongoose.model('Restaurant',restaurantSchema);

model.exports=Restaurant;