const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../client")));

// THE SERVER
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.listen(PORT, () => console.log(`App is live on port ${PORT}!`));
