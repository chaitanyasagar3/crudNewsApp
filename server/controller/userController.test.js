// userController.test.js

import request from "supertest";
import express from "express";
import userController from "../controller/user.controller.js";
import { User } from "../database/models/index.js";
import sha256 from "sha256";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env.test" });

const app = express();
app.use(express.json());
app.use("/api/users", userController);

describe("User Controller", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://localhost/CRUDBoard", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await User.deleteMany({});
  });

  describe("POST /api/users/add-user", () => {
    it("should add a new user to the database", async () => {
      const response = await request(app)
        .post("/api/users/add-user")
        .send({ username: "newuser", password: "newpassword@123" });

      expect(response.statusCode).toBe(200);
      expect(response.body.username).toBe("newuser");
    });
  });

  describe("POST /api/users/login", () => {
    it("should return a 400 status code when no user is found", async () => {
      const response = await request(app)
        .post("/api/users/login")
        .send({ username: "unknownuser", password: "password" });

      expect(response.statusCode).toBe(400);
      expect(response.text).toBe("No user found");
    });

    it("should return a 400 status code when an incorrect password is provided", async () => {
      await request(app)
        .post("/api/users/add-user")
        .send({ username: "testuser", password: "testpassword@123" });

      const response = await request(app)
        .post("/api/users/login")
        .send({ username: "testuser", password: "wrongpassword" });

      expect(response.statusCode).toBe(400);
      expect(response.text).toBe("Incorrect password");
    });

    it("should return a 200 status code and an access token when a valid login is provided", async () => {
      await request(app)
        .post("/api/users/add-user")
        .send({ username: "testuser", password: "testpassword@123" });

      const response = await request(app)
        .post("/api/users/login")
        .send({ username: "testuser", password: "testpassword@123" });

      expect(response.statusCode).toBe(200);
      expect(response.body.data.user.accessToken).toBeDefined();
    });
  });

  // describe("GET /api/users/me", () => {
  //   it("should return the authenticated user", async () => {
  //     await request(app)
  //       .post("/api/users/add-user")
  //       .send({ username: "testuser", password: "testpassword@123" });

  //     const loginResponse = await request(app)
  //       .post("/api/users/login")
  //       .send({ username: "testuser", password: "testpassword@123" });

  //     const accessToken = loginResponse.body.data.user.accessToken;

  //     console.log("accessToken", accessToken);

  //     const response = await request(app)
  //       .get("/api/users/me")
  //       .set("Authorization", `Bearer ${accessToken}`);

  //     expect(response.statusCode).toBe(200);
  //     expect(response.body.username).toBe("testuser");
  //   });

  //   it("should return a 401 status code when no authentication token is provided", async () => {
  //     const response = await request(app).get("/api/users/me");

  //     expect(response.statusCode).toBe(401);
  //   });
  //});
});
