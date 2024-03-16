import { MongoClient } from "mongodb";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 10000,
    retryWrites: true,
    retryReads: true,
};

const db = new MongoClient(process.env.DATABASE_URL ?? "mongodb://webcrawlers:blah@localhost:27017/cse312", options);
export default db;