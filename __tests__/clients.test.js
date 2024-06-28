import request from "supertest";
import { app } from "../app";
import { clients } from "../mocks/clients";
import { useClient } from "../useClient";

describe("Test the client path", () => {
  test("It should response the GET method", (done) => {
    request(app)
      .get("/clients")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("It should return the ID from the client", (done) => {
    request(app)
      .get("/client/1")
      .then((response) => {
        const client = response.body.data;
        expect(client.id).toBe("1");
        done();
      });
  });

  test("It should return the ID from the client", (done) => {
    request(app)
      .get("/clients")
      .then((response) => {
        const clients = response.body.data;
        expect(clients).toHaveLength(5);
        done();
      });
  });

  test("It should be able to remove a client", (done) => {
    request(app)
      .delete("/client/1")
      .then((response) => {
        const removedClient = response.body.data;
        expect(removedClient.id).toBe("1");
        done();
      });
  });

  test("It should remove a client from the original array", (done) => {
    expect(clients).toHaveLength(4);
    done();
  });

  test("It should remove a client from the original array", (done) => {
    const { soma } = useClient();
    const result = soma(10, 40);
    expect(result).toBe(50);
    done();
  });

  test("It should remove a client from the original array", (done) => {
    const { handleCpfCnpjFormat } = useClient();
    const result = handleCpfCnpjFormat('00000000000');
    expect(result).toBe('000.000.000-00');
    done();
  });
});
