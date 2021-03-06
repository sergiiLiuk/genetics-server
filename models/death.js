const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeathRecordSchema = new Schema({
    firstName: String,
    secondName: String,
    lastName: String,
    actNumber: String,
    year: String,
    sex: String,
    locality: String,
    deathDate: String,
    photo: String,
    note: String,
    fatherName: String,
    motherName: String,
    parish: String,
    motherLastname: String
});
 
const Model = mongoose.model( "DeathRecord", DeathRecordSchema, 'death' )
module.exports = Model;
 