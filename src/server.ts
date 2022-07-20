import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  methods: 'GET, POST',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3333, () => console.log('Server is running'));
