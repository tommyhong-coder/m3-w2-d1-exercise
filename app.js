var MongoClient = require('mongodb').MongoClient;

//database name
var url = "mongodb://localhost:27017/nodemongo";

MongoClient.connect(url, {
    useNewUrlParser: true, useUnifiedTopology: true
    }, function (err,db) {
   // if (err) throw err;
   //     console.log("Database created!");
   //     db.close();

   var dbo = db.db("nodemongo");
   // dbo.createCollection("customers", function(err,res){
    //   if (err) throw err;
    //   console.log("collection created!");
    //   db.close();
  // });

 var custData = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
 ];
 dbo.collection("customers").insertMany(custData, function(err,res) {
     if(err) throw err;
     console.log("Number of documents inserted: " + res.insertedCount);
     db.close();
 })
});