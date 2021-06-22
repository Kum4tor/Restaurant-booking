const { string } = require('@hapi/joi');
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    user_id : {type : String, required: true},
    table_type : { type : String, required: true },
    session_time : {type : String, required: true},
    no_of_seats : {type : String, requires:true},
    Book_time : {type : Date, default: Date.now}
}
);

const model = mongoose.model('Book', BookSchema);
module.exports = model;
