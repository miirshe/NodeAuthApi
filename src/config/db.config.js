import chalk from "chalk";
import { Sequelize } from "sequelize"
import { dbHost, dbName, dbPassword, dbPort, dbUsername} from './/initial.config.js'
export const connectDB = () => {
    const sequelize = new Sequelize(dbName,dbUsername,dbPassword,{
        dialect : "mysql",
        host: dbHost,
        port : dbPort
    });
    sequelize.authenticate()
    .then(() => {
        console.log(`${chalk.green.bold('Connection')} has been established successfully `);
    })
    .catch( (err) => {
        console.error(`${chalk.red.bold('Unable')} to connect to the database`,err);
    })
}