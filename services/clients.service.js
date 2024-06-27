import { clients } from "../mocks/clients";

const getAllClients = () => clients;
const getClientById = (id) => clients.find((client) => client.id === id);

export { getAllClients, getClientById };
