/**
 * New node file
 */

//var config = module.parent.exports.config;


var config = require('./config');
var mongo = require('mongodb');

//Retrieve
var MongoClient = require('mongodb').MongoClient;
var Db = require('mongodb').Db,
MongoClient = require('mongodb').MongoClient;

exports.printer = function(UserName, Password) {
	
	return "respond with a "+config.param.db.url+"resource from MongoDB" ;	
	
};

exports.opensesame = function(UserName, Password,callBack) {
	
	if(UserName=="admin" && Password=="admin" )
		{
         var Server = mongo.Server,
         Db = mongo.Db;
         var server = new Server('localhost', 27017, {auto_reconnect: true});
         db = new Db('PreferenceServicesDB', server);

	     db.open(function(err, db) {
	        if (!err) {
	           console.log("Connected to 'nodejsintro' database");
	           db.collection('Credentials', {strict: true}, function(err, collection) {
	        	   if (err) {
	                   console.log("The 'user' collection doesn't exist. Creating it with sample data...");
	                        }
	        	   db.collection('Credentials', function(err, collection) {
	        		    collection.remove({});
	        		});
	               db.collection("Credentials").ensureIndex( { "str": 1 }, { unique: true } );
	            
	               db.collection("Credentials").insert({ username : "nagaraju", password : "password123" }, function (err, inserted) {
	                    // check err...
     	                });
	              //db.collection("user").insert({ str: "foobar" }, { w: 0 });
	           });
	       }
	     }); //db.open ends here

		callBack("logged in as admin") ;
		
		}
	else if(UserName=="admin" && Password !="admin" )
		{
		callBack( "Admin user credentials are wrong" );
		}
	else
		{

		var Server = mongo.Server,
        Db = mongo.Db;
        var server = new Server('localhost', 27017, {auto_reconnect: true});
        db = new Db('PreferenceServicesDB', server);

	     db.open(function(err, db) {
	        if (!err) {
	           db.collection('Credentials', {strict: true}, function(err, collection) {
	        	   if (err) {
	                   console.log("The 'user' collection doesn't exist.");
	                   callBack("Admin has to login and create users before you using it for the first time");
	                        }
	               var CredResponse = db.collection("Credentials").findOne({username:UserName}, function(error, item) {
	            	if (item != null) { 
	            	   if(item.password==Password)
	            		  {
	            		  console.log("password Matched");
	            		  
	            		  callBack( "logged in as User : " + UserName ) ;
	            		  
	            		  }
	            	  else
	            		  {
	            		  console.log("password not Matched");
	            		  callBack( "log in Error . Check your credentials.." )  ;
	            		  }
	            	  }
	            	else
	            	  {
	            		  callBack( "User Doesnot Exist" )  ;	
	            	  }	
	                   
	                 });
	              
	           });
	       }
	     }); //db.open ends here

		

		
		}
	
	
};

//exports.checkLogin = function(UserName, Password) {

 // Connect to the db
 //MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
 // if(!err) {
 //   console.log("We are connected");
 // }
  
//});
 
//};

//Connect using the connection string
/*exports.checkLogin = function(UserName, Password) {


	MongoClient.connect("mongodb://localhost:27017/integration_test", function(err, db) {

	    db.collection("replicaset_mongo_client_collection").insert({a:1}, {b:1}, {upsert:true}, function(err, result) {

	    db.close();
	  });
	});
};

*/



