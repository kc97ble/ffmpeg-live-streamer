import express, { Request, Response } from "express";
import * as db from "../db";
const r = express.Router();

r.get("/", async (req: Request, res: Response) => {
  const commandList = await db.getCommandList();
  res.json(commandList);
});

export default r;
