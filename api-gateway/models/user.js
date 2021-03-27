/**
 * Fields Username, password, and email
 */

let mongoose = require ('mongoose');
let userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String
});
module.exports=mongoose.model('User', userSchema);

