const swaggerUi = require('swagger-ui-express')
const swaggerFile = require("../swagger/swagger_output.json")
require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect");
const instituiçãoRoute = require("./routes/instituiçãoRoute.js");
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect()  
app.use("/transmap/instituiçãos", instituiçãoRoute);
app.use("/rota-documentação", swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app;