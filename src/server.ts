import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

const port = process.env.PORT || 80;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => console.log('Server is running:', port));
