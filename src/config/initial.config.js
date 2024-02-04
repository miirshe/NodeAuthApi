import dotenv from 'dotenv'
dotenv.config();
export const port = process.env.PORT;
export const dbName = process.env.DB_NAME;
export const dbUsername = process.env.DB_USERNAME;
export const dbPassword = process.env.DB_PASSWORD;
export const dbHost = process.env.DB_HOST;
export const dbPort = process.env.DB_PORT;
