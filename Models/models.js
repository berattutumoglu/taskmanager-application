const mongoose = require("mongoose")
const dbSchema = new mongoose.Schema({
	name: {
		required: [true, "Please add your name!"],
		type: String,
		trim: true,
		maxlength: [100, "Name cannot be more than 100 charachters!"],
	},

	title: {
		required: true,
		type: String,
		trim: true,
		maxlength: [150, "Title cannot be more than 150 charachters!"],
	},

	description: {
		required: [true, "Please add a description!"],
		type: String,
		trim: true,
		maxlength: [200, "Description cannot be more than 200 charachters!"],
	},

	isDone: {
		type: Boolean,
		default: false,
	},

	doneTime: {
		type: Date,
		default: Date.now,
	},
})

module.exports = mongoose.model("Data", dbSchema)
