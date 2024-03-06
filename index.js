const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const logRoute = require("./routes/log");
const routes = { logRoute };
app.use("/log", routes.logRoute);
app.listen(PORT, () => {
  console.log("+LUDUS-Server running on " + PORT + "!");
});
