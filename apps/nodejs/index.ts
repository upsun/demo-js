import express, { Express, Request, Response } from "express";
import figlet from "figlet";
import mysql, {
  RowDataPacket,
} from 'mysql2/promise';
require("dotenv").config();

interface EnvData extends RowDataPacket {
  uid: number;
  vendor: string;
  datamsg: string;
  created: Date;
}

function openConnection () {
  let db_host = process.env.DATABASE_HOST;
  let db_port = process.env.DATABASE_PORT;
  let db_user = process.env.DATABASE_USERNAME;
  let db_pass =  process.env.DATABASE_PASSWORD;
  let db_db =  process.env.DATABASE_PATH;
  let connectionURI = `mariadb://${db_host}:${db_port}/${db_db}?user=${db_user}&password=${db_pass}`
  return mysql.createConnection(connectionURI)
}

function createTable(connection: mysql.Connection) {
  return connection.execute(
    `CREATE TABLE IF NOT EXISTS upsuninherit (
      uid INT(10) NOT NULL AUTO_INCREMENT,
      vendor VARCHAR(64) NULL DEFAULT NULL,
      datamsg VARCHAR(128) NULL DEFAULT NULL,
      created DATE NULL DEFAULT NULL,
      PRIMARY KEY (uid)
    ) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;`
  );
}

function insertData(connection: mysql.Connection) {
  return connection.execute(
    "INSERT IGNORE INTO upsuninherit (uid, vendor, datamsg, created) VALUES (1, 'upsun', 'DotJS on production!', '2024-06-26');"
  );
}

function dropTable(connection: mysql.Connection) {
  return connection.execute("DROP TABLE upsuninherit");
}

const app: Express = express();
const port = process.env.PLATFORM_APP_DIR ? process.env.PORT : 3001;
const backLink = process.env.PLATFORM_APP_DIR ? "/" : "http://localhost:4321";

app.get("/", (_req: Request, res: Response) => {
  res.redirect('/nodejs')
});

app.get("/nodejs", async (_req: Request, res: Response) => {

    let additionalTxt = "";

    if (process.env.DATABASE_HOST) {

      // Connect to MariaDB.
      const connection = await openConnection();

      // Create the data if it doesn't already exist.
      await createTable(connection);
      await insertData(connection);

      const [users] = await connection.query<EnvData[]>(
        'SELECT * FROM upsuninherit;'
      );

      additionalTxt = `<p>Production data is as follows in the MariaDB database:</p><ul>`;
    
      users.forEach((user) => {
        additionalTxt = additionalTxt + `<li>vendor: ${user.vendor}</li>`;
        additionalTxt = additionalTxt + `<li>message: ${user.datamsg}</li>`;
        additionalTxt = additionalTxt + `<li>created: ${user.created}</li>`;
      });

      additionalTxt = additionalTxt + `</ul><p>Notice that the data above was created for the production environment, and that this data is inherited (identical) across all child environments.</p>`;
    
      await dropTable(connection);

    }
  
    const txt = figlet.textSync("NodeJS!");
    res.send(`<h3><a href="${backLink}">Back</a></h3><pre style="word-wrap: break-word; white-space: pre-wrap;">${txt}</pre>${additionalTxt}`);
})

app.listen(port)
