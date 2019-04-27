// import express
const express = require("express");

// import express-graphql
const graphqlHTTP = require("express-graphql");

const app = express();

// bind express with graphql
app.use("/graphql", graphqlHTTP({
    // pass in a schema property
}))

// create server
app.listen(4000, () => {
    console.log("Listening on port 4000")
})
