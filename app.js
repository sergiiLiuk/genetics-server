require('dotenv').config()
const express = require("express");
const cors = require('cors')
const { graphqlHTTP } = require("express-graphql");
const Mongoose = require('mongoose');

const app = express();


const querySchema = require('./graphql/index').querySchema; 

const port = process.env.PORT // 5000

app.use('*',cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());  
 
app.listen(port, async () => {
     console.log(`server is running on port: ${port}`)
     let url = process.env.DATABASE_URL
     await Mongoose.connect(url, { 
         useNewUrlParser: true,
         useUnifiedTopology: true
    });
})

const db = Mongoose.connection
db.on('error', console.error.bind(console, "MongoDB connection error:"))
db.once('open', ( ) => console.log("Connected to database"))
app.use("/api", graphqlHTTP({
    schema: querySchema,
    rootValue: global,
    graphiql: true
}) 
);

// handle production
if(process.env.NODE_ENV === 'production'){
    // static folder
    app.use(express.static(__dirname + '/public/'));
    console.log('AAA')
    // handle SPA
    app.get(/.*/, (res, req) => res.sendFile(__dirname + '/public/index.html'));
}  