const swaggerUi = require('swagger-ui-express')
const swaggerFile = require("../swagger/swagger_output.json")
require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect");
const instituiçãoRoute = require("./routes/instituiçãoRoute.js");
const app = express();
mongoose.connect()
app.use(express.json());
app.use(cors());
app.use("/transmap/instituição",instituiçãoRoute);
app.use('/rota-dos-documentos', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.get("/",(req, res) => {
    res.send ({message:"Boas-vindas ao transmap."})
} )

module.exports = app;