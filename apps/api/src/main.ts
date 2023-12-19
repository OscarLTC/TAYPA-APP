import express from 'express';
import cors from 'cors';
import { Firebase } from './app/config/Firebase';
import { drinksRouter } from './app/routes/drinks.router';

const app = express();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const firebase = new Firebase().initialize();

app.use(cors({ origin: true }));
app.use(express.json());

app.use('/drinks', drinksRouter);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
