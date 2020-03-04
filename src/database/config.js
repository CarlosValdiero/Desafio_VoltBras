const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = `${process.env.DATABASE_CONNECTION_STRING}/stations`;

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once('open', () =>
	console.log(`Connected to mongo at ${url}`)
);
