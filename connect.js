const MongoClient = require('mongodb');

const url = 'mongodb://localhost/WriterTool';


//this function call actually connects to the DB.
//Outputs result to console.

  MongoClient.connect(url, (error, database) => {
    if (error) return process.exit(1);
    console.log('Connection is okay');

    const db = database.db('WritersTool');

    var cursor = db.collection('Stories').find();

     cursor.each(function(err, doc) {

         console.log(doc);
         });
    cursor = db.collection('Worlds').find();
    cursor.each(function(err, doc) {
        console.log(doc);
      });

  });


function queryAllStories() {
  MongoClient.connect(url, (error, database) => {
    if (error) return process.exit(1);
    console.log('Connection is okay');

    const db = database.db('WritersTool');

    var cursor = db.collection('Stories').find();

     cursor.each(function(err, doc) {

         console.log(doc);
         });
});
}
