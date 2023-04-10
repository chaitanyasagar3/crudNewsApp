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

  describe("POST /api/users/update-preferences", () => {
    it("should update user preferences", async () => {
      const user = await User.create({
        username: "testuser",
        hashedPassword: sha256("testpassword@123"),
        preferences: {
          general: true,
          business: true,
          entertainment: true,
          health: true,
          science: true,
          sports: true,
          technology: true,
        },
      });

      const newPreferences = {
        general: true,
        business: true,
        entertainment: true,
        health: true,
        science: true,
        sports: true,
        technology: true,
      };
      const response = await request(app)
        .post("/api/users/update-preferences")
        .send({ userId: user._id, preferences: newPreferences });

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(newPreferences);

      const updatedUser = await User.findById(user._id);
      expect(updatedUser.preferences).toEqual(newPreferences);
    });

    it("should return a 400 status code when user ID is not provided", async () => {
      const response = await request(app)
        .post("/api/users/update-preferences")
        .send({
          preferences: {
            general: true,
            business: true,
            entertainment: true,
            health: true,
            science: true,
            sports: true,
            technology: true,
          },
        });

      expect(response.statusCode).toBe(400);
      expect(response.text).toBe(
        "Cannot set properties of null (setting 'preferences')"
      );
    });

    it("should return a 400 status code when user ID is invalid", async () => {
      const response = await request(app)
        .post("/api/users/update-preferences")
        .send({
          userId: "invalidID",
          preferences: {
            general: true,
            business: true,
            entertainment: true,
            health: true,
            science: true,
            sports: true,
            technology: true,
          },
        });

      expect(response.statusCode).toBe(400);
      expect(response.text).toBe(
        'Cast to ObjectId failed for value "invalidID" (type string) at path "_id" for model "User"'
      );
    });
  });

  describe("POST /api/users/add-user", () => {
    it("should add a new user to the database with default preferences", async () => {
      const response = await request(app)
        .post("/api/users/add-user")
        .send({ username: "newuser", password: "newpassword@123" });
  
      expect(response.statusCode).toBe(200);
      expect(response.body.username).toBe("newuser");
      expect(response.body.preferences.general).toBe(true);
      expect(response.body.preferences.business).toBe(false);
      expect(response.body.preferences.entertainment).toBe(false);
      expect(response.body.preferences.health).toBe(false);
      expect(response.body.preferences.science).toBe(false);
      expect(response.body.preferences.sports).toBe(false);
      expect(response.body.preferences.technology).toBe(false);
    });
  });
  

});
