const mongoose = require('mongoose');
const { Schema } = mongoose;

const stationSchema = new Schema({
	name: String
});

const Station = mongoose.model('station', stationSchema);

module.exports = {
	Station
};
