import request from "supertest";
const server = require("../app");
import app from "../app";
import { User } from "../database/models/index.js";
import sha256 from "sha256";
import http from "http";
process.env.SERVER_PORT = 8080;
describe("User Controller", () => {
  let accessToken;
  let user;
  let server;

  beforeAll(async () => {
    // server = http.createServer(app);
    //server.listen(process.env.SERVER_PORT);

    user = await User.create({
      username: "testuser",
      hashedPassword: sha256("testpassword@123"),
    });

    const newUser = new User(user);
    await newUser.save();

    console.log(newUser);

    const response = await request(app)
      .post("/api/users/login")
      .send({ username: "testuser", password: "testpassword@123" });
    console.log("Rinii", response);
    accessToken = response.body.data.user.accessToken;
  });

  afterAll(async () => {
    await User.deleteMany({});
  });

  describe("POST /api/users/login", () => {
    it("should return a 400 status code when no user is found", async () => {
      const response = await request(app)
        .post("/api/users/login")
        .send({ username: "unknownuser", hashedPassword: "password" });

      expect(response.statusCode).toBe(400);
      expect(response.text).toBe("No user found");
    });

    // it("should return a 400 status code when an incorrect password is provided", async () => {
    //   const response = await request(app)
    //     .post("/api/users/login")
    //     .send({ username: "testuser", password: "wrongpassword" });

    //   expect(response.statusCode).toBe(400);
    //   expect(response.text).toBe("Incorrect password");
    // });

    // it("should return a 200 status code and an access token when a valid login is provided", async () => {
    //   const response = await request(app)
    //     .post("/api/users/login")
    //     .send({ username: "testuser", password: "testpassword@123" });

    //   expect(response.statusCode).toBe(200);
    //   expect(response.body.data.user.accessToken).toBeDefined();
    // });
  });

  //   describe("POST /api/users/add-user", () => {
  //     it("should add a new user to the database", async () => {
  //       const response = await request(app)
  //         .post("/api/users/add-user")
  //         .send({ username: "newuser", password: "newpassword@123" })
  //         .set("Authorization", `Bearer ${accessToken}`);

  //       expect(response.statusCode).toBe(200);
  //       expect(response.body.username).toBe("newuser");
  //     });
  //   });

  //   describe("GET /api/users/me", () => {
  //     it("should return the authenticated user", async () => {
  //       const response = await request(app)
  //         .get("/api/users/me")
  //         .set("Authorization", `Bearer ${accessToken}`);

  //       expect(response.statusCode).toBe(200);
  //       expect(response.body.username).toBe("testuser");
  //     });

  //     it("should return a 401 status code when no authentication token is provided", async () => {
  //       const response = await request(app).get("/api/users/me");

  //       expect(response.statusCode).toBe(401);
  //     });
  //   });
});
