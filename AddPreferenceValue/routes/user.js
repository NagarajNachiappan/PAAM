
/*
 * GET users listing.
 */

var mongoModule = require('./mongoModule');

var config = require('./config');


exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.login = function(req, res){
<<<<<<< HEAD
	res.render('index', { title: 'User Preference Services',name: 'nagaraj'  });  
=======
	res.render('index', { title: 'Preference Services',name: 'nagaraj'  });  
>>>>>>> 49d6f971b182e24e633788339d77785fd6567d17
	};

exports.loginpost = function(req, res){
   UserName=req.param('UserName');
   Password=req.param('Password');
<<<<<<< HEAD
   var pageData;
   mongoModule.opensesame(UserName,Password,function(mongoResponse)
		   {
/*	    var request = require('request');  
	    request('http://google.com', function (error, response, html) {
		   if (!error && response.statusCode == 200) {
		     console.log(html);
		   }
		 });
*/
/*	   var http = require('http');

	   var options = {
	       host: 'www.google.com',
	       path: '/'
	   }
	   var request = http.request(options, function (res) {
	       var data = '';
	       res.on('data', function (chunk) {
	           data += chunk;
	       });
	       res.on('end', function () {
	           console.log(data);

	       });
	   });
	   request.on('error', function (e) {
	       console.log(e.message);
	   });
	   request.end();
*/
/*	   var http = require('http');  

	   

	 //declare output method

	 var output = function(response) {

	    var data = '';


	     response.addListener('data', function(chunk){ 

	         data += chunk; 

	     });

	     response.addListener('end', function(){

	        console.log('Page HTML: %s', data);
	        pageData = data;
	     });

	 };


	 //declare array of websites to curl

	 var websites = ['http://www.google.com?q=10'];


	 //Iterate of websites

	 for(var i in websites){

	 	http.get(websites[i], output);

	 }
*/
//   res.send(mongoResponse+"   UserName : "+ UserName+"    Password  : " + Password+ " URL   : " +config.param.db.url);
//   res.render('After.jade', {title: 'Login Response', pageData: JSON.stringify(mongoResponse) });

//   res.render('After',  { 
//                     title: 'Login Response', 
//                     pageResponse: mongoResponse,
//                     loginStatus: true
//                    }
//               );
   console.log('mongoResponse' + mongoResponse);
		   });
   
=======
   mongoModule.opensesame(UserName,Password,function(mongoResponse)
		   {
   
//   res.send(mongoResponse+"   UserName : "+ UserName+"    Password  : " + Password+ " URL   : " +config.param.db.url);
//   res.render('After.jade', {title: 'Login Response', pageData: JSON.stringify(mongoResponse) });
   res.render('After',  { 
                     title: 'Login Response', 
                     pageResponse: JSON.stringify(mongoResponse) 
                     }
               );
   console.log('mongoResponse' + mongoResponse);
		   });
>>>>>>> 49d6f971b182e24e633788339d77785fd6567d17
};