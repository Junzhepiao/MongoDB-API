const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionsSchema = new Schema({
    user_id: String,
    amount: Number,
    type: String,
    business_name:String
});
TransactionsSchema.set('timestamps', true);

const Transactions = mongoose.model('transactions', TransactionsSchema);

module.exports = Transactions;