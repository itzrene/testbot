const mongoose = require('mongoose');

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            autoIndex: false,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family: 4
        };

        mongoose.connect("mongodb://AlwaysRejected:" + process.env.PASSWORD + "@magicalcreature-jfi8q.mongodb.net:27017/Tutorial", dbOptions);
        //mongoose.connect('mongodb+srv://AlwaysRejected:password@magicalcreature-jfi8q.mongodb.net/Tutorial?retryWrites=true', dbOptions);
        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log('Mongoose connection successfully opened!');
        });

        mongoose.connection.on('err', err => {
            console.error('Mongoose connection error: \n' + err.stack);
        });

        //const mongoose: typeof import("mongoose")
        mongoose.connection.on('disconnected', () => {
            console.log('Mongoose connection disconnected');
        });
    }
};

