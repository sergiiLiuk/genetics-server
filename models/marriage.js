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
    sex: String,
    locality: String,
    marriageDate: String,
    photo: String,
    note: String,
    husbandFatherName: String,
    husbandMotherName: String,
    husbandMotherLastname: String,
    wifeFatherName: String,
    husbandMotherName: String,
    husbandMotherLastname: String,
    parish: String
    
});
 
const Model = mongoose.model( "MarriageRecord", MarriageRecordSchema, 'MarriageRecords' )
module.exports = Model;
 