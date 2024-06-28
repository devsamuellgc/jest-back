import { clients } from "../mocks/clients";

const getAllClients = () => clients;
const getClientById = (id) => clients.find((client) => client.id === id);
const deleteClient = (id) => {
  const clientIndex = clients.findIndex((value) => value.id === id);
  if (clientIndex > -1) {
    const removedClient = clients.splice(clientIndex, 1);
    return removedClient[0];
  }
  return clients;
};

export { getAllClients, getClientById, deleteClient };
