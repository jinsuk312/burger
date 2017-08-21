var connection = require('../config/connection.js')


// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var orm = {
  selectAll: function(tableInput, cb){
    var queryString = "SELECT * FROM ";
    queryString += tableInput;
    queryString += ";";
    connection.query(queryString, function(err,res){
      if(err) throw err
        cb(res);
    });
  },
  updateOne: function(table, objColVals, condition, cb){
    var queryString = "UPDATE ";
    queryString += table;;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;
    queryString +=";";
    connection.query(queryString, function(err,res){
      if(err) throw err
        cb(res);
    });
  },
  insertOne: function(table, cols, vals, cb){
    var queryString = "INSERT INTO ";
    queryString += tableName;
    queryString += " (";
    queryString += colNames.join(",");
    queryString += ") VALUES (";
    queryString +=  generateQmarks(values.length);
    queryString +=  ");";
    connection.query(queryString, function(err,res){
      if(err) throw err
        cb(res)
    })
    var queryString = " INSERT INTO ";
    queryString += tableName;
    queryString += " (";
    queryString += cols.join(",");
    queryString += ") VALUES";
  }
};
module.exports = orm;