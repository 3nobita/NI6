const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    heading: { type: String, required: true },
    about: { type: String, required: true },
    image: { type: String, required: true },
    date:String,
}, { timestamps: true }); // This adds createdAt and updatedAt fields

module.exports = mongoose.model('Blog', blogSchema);
