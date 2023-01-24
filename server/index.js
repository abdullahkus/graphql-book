import express from 'express';
import jsonGraphqlExpress from 'json-graphql-server';
import cors from 'cors';
import data from './db.js'

const HOST = 'localhost';
const PORT = 4000;
const app = express();

app.use(cors());
app.use('/graphql', jsonGraphqlExpress.default(data));
app.listen(PORT, HOST);
