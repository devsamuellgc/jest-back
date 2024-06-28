import { useFormat } from "../helpers/formats";

describe("Test the format helpers", () => {
  test("It should return a formatted CPF", (done) => {
    const { handleCpfCnpjFormat } = useFormat();
    const formattedCpf = handleCpfCnpjFormat("00000000000");
    expect(formattedCpf).toBe("000.000.000-00");
    done();
  });

  test("It should return a formatted CNPJ", (done) => {
    const { handleCpfCnpjFormat } = useFormat();
    const formattedCnpj = handleCpfCnpjFormat("00000000000000");
    expect(formattedCnpj).toBe("00.000.000/0000-00");
    done();
  });

  test("It should return a formatted 10 digits phone number", (done) => {
    const { handlePhoneFormat } = useFormat();
    const formattedCnpj = handlePhoneFormat("0000000000");
    expect(formattedCnpj).toBe("(00) 0000-0000");
    done();
  });

  test("It should return a formatted 11 digits phone number", (done) => {
    const { handlePhoneFormat } = useFormat();
    const formattedCnpj = handlePhoneFormat("00000000000");
    expect(formattedCnpj).toBe("(00) 0 0000-0000");
    done();
  });
});
