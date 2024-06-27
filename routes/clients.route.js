import * as clientsController from "../controllers/clients.controller.js";
import { Router } from "express";

export const clientsRouter = Router();

clientsRouter.get("/clients", clientsController.getClients);
clientsRouter.get("/client/:id", clientsController.getClientById);
