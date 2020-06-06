import sqlite3 from "sqlite3";
import * as types from "shared/src/types";

console.info("Opening database...");
const db = new sqlite3.Database(":memory:");

const a: types.Id = "";
console.log(a);

process.on("exit", () => {
  console.log("Closing database...");
  db.close();
});
