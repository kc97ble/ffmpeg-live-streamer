import express, { Request, Response } from "express";
import * as routers from "./routers";
import "./db";

const app = express();
const port = 5000;

app.get("/", (req: Request, res: Response) => res.send("index"));

app.use("/commands", routers.commandList);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

process.on("SIGINT", () => process.exit());
process.on("SIGTERM", () => process.exit());
