/**
 * Created by lenovo on 1/20/2016.
 */
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var menuOverViewSchema=new Schema({
    _id:Schema.Types.ObjectId,
    menu_overview:[{category:String,sub_category:[String]}]
});

var MenuOverView=mongoose.model('Menu_overview',menuOverViewSchema);
module.exports=MenuOverView;