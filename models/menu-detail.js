/**
 * Created by lenovo on 1/22/2016.
 */

var mongoose =require('mongoose');
var Schema=mongoose.Schema;

var menuDetailSchema=new Schema({

});


var MenuDetail=mongoose.model('menu_detail',menuDetailSchema);

module.exports=MenuDetail;