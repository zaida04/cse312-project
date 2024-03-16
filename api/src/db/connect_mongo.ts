import mongoose from 'mongoose';

const options = {
    connectTimeoutMS: 10000,
    retryWrites: true,
    retryReads: true,
};

mongoose.connect(process.env.DATABASE_URL ?? "mongodb://webcrawlers:blah@localhost:27017/", options);