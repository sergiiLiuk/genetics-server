const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MarriageRecordSchema = new Schema({
    husbandFirstName: String,
    husbandSecondName: String,
    husbandLastName: String,
    wifeFirstName: String,
    wifeSecondName: String,
    wifeLastName: String,
    actNumber: String,
    year: String,
    locality: String,
    marriageDate: String,
    photo: String,
    note: String,
    husbandFatherName: String,
    husbandMotherName: String,
    husbandMotherLastname: String,
    wifeFatherName: String,
    wifeMotherName: String,
    wifeMotherLastname: String,
    parish: String
    
});
 
const Model = mongoose.model( "MarriageRecord", MarriageRecordSchema, 'marriage' )
module.exports = Model;
 