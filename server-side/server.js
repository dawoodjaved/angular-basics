const express = require("express");
const bodyParser = require("body-parser");
const mongoDB = require("mongoose");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { schema } = require("./Schema/schema");

const app = express();

const PORT = process.env.PORT || 5000;
const URL =
  "mongodb+srv://dawood_javeed:User123@aoaproject.4rjiy.gcp.mongodb.net/Angular-With-GraphQL?retryWrites=true&w=majority";

mongoDB.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

// On Connection
mongoDB.connection.on("connected", () => {
  console.log("Connected to database ");
});

// On Error
mongoDB.connection.on("error", (err) => {
  console.log("Database error: " + err);
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, () => console.log("Server is listening at PORT 5000."));
