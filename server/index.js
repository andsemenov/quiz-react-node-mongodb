const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;

const app = express();

//////////////////////////////////////////////////////////////////////////

const cors = require("cors");

require("dotenv").config();
app.use(cors());
const mongoose = require("mongoose");
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
///////////////////////////////////////////////////////////////////////////
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

//////////////////////////////////////////////////////////

const questionRouter = require("./routes/questions");

app.get("/questions", questionRouter);

//////////////////////////////////////////

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
