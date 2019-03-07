const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    email: { type: String, required: [true,"email field is required"] },
    password: { type: String, required: [true,"password field is required"] }
});
UsersSchema.set('timestamps', true);

const Users = mongoose.model('users', UsersSchema);

module.exports = Users;