import * as clientsService from "../services/clients.service.js";

const getClients = (req, res) => {
  const clients = clientsService.getAllClients();
  return res
    .status(200)
    .json({ data: clients, message: "Clientes encontrados com sucesso!" });
};

const getClientById = (req, res) => {
  const id = req.params.id;
  const client = clientsService.getClientById(id);
  return res
    .status(200)
    .json({ data: client, message: "Cliente encontrado com sucesso!" });
};

const deleteClient = (req, res) => {
  const id = req.params.id;
  const removedClient = clientsService.deleteClient(id);
  return res
    .status(200)
    .json({ data: removedClient, message: "Cliente deletado com sucesso" });
};

export { getClientById, getClients, deleteClient };
