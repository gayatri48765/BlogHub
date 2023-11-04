import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "root",
  // password: process.env.DB_KEY,
  database:"Blog"
})