import request from "supertest";
import { app } from "./app";

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
});
