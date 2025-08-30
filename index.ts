import express from "express";
import { type Request, type Response } from "express";
import prisma from "./src/prisma-client.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.status(200).send({
    data : users
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
