const app = require("express")();
const mongoose = require("mongoose");
const port = 8888;
const bodyParser= require("body-parser");

/* DB Configuration */
const mongoDB = 'mongodb://127.0.0.1:27017/test';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

const dbc = mongoose.connection;

dbc.on('error', console.error.bind(console, "MongoDB's Error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

/* Import Endpoints */
const surveyors = require("./endpoints/surveyors");
const plans = require("./endpoints/plans");
const requests = require("./endpoints/requests");

const API_URL = "/api/v1";

/* Configure Endpoints */
app.use(`${API_URL}/surveyors`, surveyors);
app.use(`${API_URL}/plans`, plans);
app.use(`${API_URL}/requests`, requests);                       


/* Server Configuration */
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 