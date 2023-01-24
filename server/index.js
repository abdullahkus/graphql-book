const express = require('express')
const jsonGraphqlExpress = require('json-graphql-server')
const cors = require('cors')
const data = require('./db.json')

const port = process.env.PORT || 4000; // <== You can change the port
const app = express();

app.use(cors());
app.use('/graphql', jsonGraphqlExpress.default(data));
app.listen(port);
