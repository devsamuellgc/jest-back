import express from "express";
import { clientsRouter } from "./routes/clients.route";

export const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(clientsRouter);
