import sqlite3 from "sqlite3";
import { types } from "shared";

console.info("Opening database...");
const db = new sqlite3.Database(":memory:");

const a: types.Id = "";
console.log(a);

process.on("exit", () => {
  console.log("Closing database...");
  db.close();
});
