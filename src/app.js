import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import chalk from 'chalk';
import { port } from './config/initial.config.js';
import { connectDB } from './config/db.config.js';


const PORT = port || 5000;
const app = express();

// rest of your code here
app.use(express.json());
app.use(cors());
app.use(bodyParser());


// database connection

connectDB()

app.listen(PORT, () => {
    console.log(`${chalk.green.bold('Server')} is listening on  ${PORT} 🚀 `);
});

