var orm = require("../config/orm.js");
var burgerORM = {
	selectAll: function(cb){
		orm.selectAll("burger", function(res){
			cb(res);
		});
	},
	insertOne: function(burgerOne, cb){
		orm.insertOne("burger", ["burger_name", "devoured"], ["burgerOne", false], function(res){
			cb(res);
		});
	},
	updateOne: function(value, condition, cb){
		orm.updateOne("burger", value, condition,function(res){
			cb(res);
		});
	},
};
module.exports = burgerORM;