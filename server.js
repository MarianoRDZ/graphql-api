const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();

app.listen(3000);
console.log("Server is running on port 3000");