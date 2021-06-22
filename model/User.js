const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, max: 1024, min: 6 }
}
);

const model = mongoose.model('User', UserSchema);
module.exports = model;