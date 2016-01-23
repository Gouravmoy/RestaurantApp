/**
 * Created by lenovo on 1/15/2016.
 */


var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var MenuOverView=require('./menu-overview');


var restaurantSchema=new Schema({
    _id:Schema.Types.ObjectId,
   restaurant_name: String,
    restaurant_image:{
        thumbnail:String,
        "profile":String
    },
    beacon_nameSp:String,
    beacon_instance:[String],
    address:{
        street:String,
        city:String,
        dist:String,
        pin:String,
        state:String

    },
    restaurant_menu: {type:Schema.Types.ObjectId,ref:MenuOverView}
});


var Restaurant=mongoose.model('Restaurant',restaurantSchema);

module.exports=Restaurant;