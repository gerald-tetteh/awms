const mongodb = require("mongodb");

const mongoClient = new mongodb.MongoClient(process.env.MONGO_URI);

module.exports = mongoClient;
