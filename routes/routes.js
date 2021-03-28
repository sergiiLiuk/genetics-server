
const express = require("express");
const mongodb = require("mongodb")
const API = require("../controllers/api")

const router = express.Router()

router.get('/', API.fetchAllBirthRecords )

module.exports = router                                                  