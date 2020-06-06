import express, { Request, Response } from "express";
const r = express.Router();

r.get("/", (req: Request, res: Response) => {
  res.send("commandListRouter");
});

export default r;
