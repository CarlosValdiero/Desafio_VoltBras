const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose
	.connect(process.env.DATABASE_URL, {
		useNewUrlParser: true
	})
	.then(() => {
		console.log('successfully connected to the database');
	})
	.catch(err => {
		console.log('error connecting to the database');
		process.exit();
	});

mongoose.connection.once('open', () =>
	console.log(`Connected to mongo at ${process.env.DATABASE_URL}`)
);
