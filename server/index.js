import express from 'express';
import jsonGraphqlExpress from 'json-graphql-server';
import cors from 'cors';
import data from './db.js'

const port = process.env.PORT || 3200; // <== You can change the port
const app = express();

app.use(cors());
app.use('/graphql', jsonGraphqlExpress.default(data));
app.listen(port);
