const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BirthRecordSchema = new Schema({
    firstName: String,
    secondName: String,
    lastName: String,
    actNumber: String,
    sex: String,
    birthPlace: String,
    birthday: String,
    photo: String,
    note: String,
    fatherName: String,
    motherName: String,
    recordedBy: String,
    motherLastname: String
});
 
const Model = mongoose.model( "BirthRecord", BirthRecordSchema, 'birthRecords' )
module.exports = Model;
 