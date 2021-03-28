const BirthRecord = require("../models/birth")
 
module.exports = class API {
    static async fetchAllBirthRecords(req, res) {
        try {
            console.log('hello')
            const birthRecords = await BirthRecord
            res.status(200).json(birthRecords);
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }
}