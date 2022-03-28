const express = require("express");
const cors = require("cors");
const apiroutes = require("./routes");

let app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);

app.listen(3000);
