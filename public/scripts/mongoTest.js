const {
  MongoClient,
} = require('mongodb');

const MONGODB_URI = 'mongodb://localhost:27017/tweeter';

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  // ==> We have a connection to the 'test-tweets' db,
  //     starting here.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  db.collection('tweets').find().toArray((err, results) => {
    if (err) throw err;

    console.log('results array: ', results);

    // This is the end...
    db.close();
  });
});
