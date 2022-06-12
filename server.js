const mongoose = require("express");
const express = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(require("./routes"));

mongoose.connect(
  process.env.MODGODB_URI || "mongod://localhost:27017/social-network-api",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.request("debug", true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
