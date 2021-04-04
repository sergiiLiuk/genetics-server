const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BirthRecordSchema = new Schema({
    firstName: String,
    secondName: String,
    lastName: String,
    actNumber: String,
    year: String,
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
 
const Model = mongoose.model( "BirthRecord", BirthRecordSchema, 'birth' )
module.exports = Model;
 