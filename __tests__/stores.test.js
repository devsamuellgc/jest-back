import { useStores } from "../helpers/stores";

describe("Test the stores logic", () => {
  test("It should response the GET method", (done) => {
    const { faturamentoTotalLojas } = useStores();
    expect(Number(faturamentoTotalLojas)).toBe(17017.87);
    done();
  });
});
