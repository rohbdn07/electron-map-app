import Database from "better-sqlite3";
import path from "path";
import { DataSource } from "typeorm";
import { User } from "./entities/User";

// const db = new Database("database.db");

// check either for dev or prod environment
const isComplied = path.extname(__filename).includes("js");

export const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: "./demo.db",
  synchronize: true,  // MUST set 'false' for production, instead run migration to update.
  logging: true,
  logger: "advanced-console",
  entities: [User],
  migrations: [`src/migrations/**/*.${isComplied ? "js" : "ts"}`],
  // subscribers: [],
});

export const dbConnection = async () => {
  // to initialize initial connection with the database, register all entities
  // and "synchronize" database schema, call "initialize()" method of a newly created database
  // once in your application bootstrap
  try {
    await AppDataSource.initialize();
    console.log("Database is connected successfully");
  } catch (error) {
    console.log("Unable to connect database", error);
  }
};

// export default db;