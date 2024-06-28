const lojas = [
  {
    id: "1",
    nome: "Loja 1",
    invoice: 1598.45,
    state: "CE",
  },
  {
    id: "2",
    nome: "Loja 2",
    invoice: 2000,
    state: "SP",
  },
  {
    id: "3",
    nome: "Loja 3",
    invoice: 4500,
    state: "RJ",
  },
  {
    id: "4",
    nome: "Loja 4",
    invoice: 159.98,
    state: "CE",
  },
  {
    id: "5",
    nome: "Loja 5",
    invoice: 8759.44,
    state: "SP",
  },
];

export const useStores = () => {
  const faturamentoTotalLojas = lojas
    .reduce((prev, current) => {
      return prev + current.invoice;
    }, 0)
    .toFixed(2);

  return { faturamentoTotalLojas };
};
