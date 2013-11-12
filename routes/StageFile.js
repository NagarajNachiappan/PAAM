/**
 * New node file
 */

/* Basic Single Query*/ 
            var coll = db.collection("user").findOne({str:'foobar'}, function(err, item) {

            	console.log(item);
                
              });
            
 
/* All Query */
            var stream = collection.find().stream();
            stream.on('error', function (err) {
              console.error(err);
            });
            stream.on('data', function (doc) {
              //console.log(doc);
            });

            
/* Insert */
           
            db.collection("user").insert({ str: "maria" }, function (err, inserted) {
                // check err...
            });
            
            //db.collection("user").insert({ str: "foobar" }, { w: 0 });
