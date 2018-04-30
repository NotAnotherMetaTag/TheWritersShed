const MongoClient = require('mongodb');

const url = 'mongodb://localhost/WriterTool';

var result = "";

//this function call actually connects to the DB.
//Outputs result to console.
function queryAllStories(){
  MongoClient.connect(url, (error, database) => {
    if (error) return process.exit(1);
    console.log('Connection is okay');

    const db = database.db('WritersTool');

    var cursor = db.collection('Stories').find();

     cursor.each(function(err, doc) {
       console.log(doc);

       result = result + ' ' + doc;
       return result;
         });
       });
}

function queryOneStory(searchParam) {
  MongoClient.connect(url, (error, database) => {
    if (error) return process.exit(1);
    console.log('Connection is okay');

    const db = database.db('WritersTool');

    var cursor = db.collection('Stories').findOne(searchParam);

     cursor.each(function(err, doc) {
       console.log(doc);
     });
   });
}
