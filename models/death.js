const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeathRecordSchema = new Schema({
    firstName: String,
    secondName: String,
    lastName: String,
    actNumber: String,
    sex: String,
    locality: String,
    birthday: String,
    photo: String,
    note: String,
    fatherName: String,
    motherName: String,
    parish: String,
    motherLastname: String
});
 
const Model = mongoose.model( "DeathRecord", DeathRecordSchema, 'deathRecords' )
module.exports = Model;
 