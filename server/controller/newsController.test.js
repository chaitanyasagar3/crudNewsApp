import request from "supertest";
import express from "express";
import newsController from "../controller/news.controller.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config({ path: ".env" });
app.use(express.json());
app.use("/api/news", newsController);

describe("News Controller", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://localhost/CRUDBoard", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  // Check if the endpoint returns a 200 status code
  describe("GET /api/news enpoint", () => {
    it("should return a 200 status code", async () => {
      const response = await request(app)
        .get("/api/news/category")
        .query({ category: "general" });
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  //Checking if params are missing
  describe("GET /api/news enpoint", () => {
    it("should return a 500 status code", async () => {
      const response = await request(app)
        .get("/api/news/category")
        .query({ category: "" });
      expect(response.statusCode).toBe(500);
      expect(response.body).toBeDefined();
      expect(response.body.length).toBe(undefined);
    });
  });

  //Check if multiple params are passed
  describe("GET /api/news enpoint", () => {
    it("should return a 200 status code", async () => {
      const response = await request(app)
        .get("/api/news/category")
        .query({ category: "general", country: "us" });
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  //Check if the path is wrong
  describe("GET /api/news enpoint", () => {
    it("should return a 404 status code", async () => {
      const response = await request(app)
        .get("/api/")
        .query({ category: "general" });
      expect(response.statusCode).toBe(404);
      expect(response.body).toBeDefined();
      expect(response.body.length).toBe(undefined);
    });
  });

  //Check if we make a post request
  describe("POST /api/news enpoint", () => {
    it("should return a 404 status code", async () => {
      const response = await request(app)
        .post("/api/news")
        .query({ category: "general" });
      expect(response.statusCode).toBe(401);
      expect(response.body).toBeDefined();
      expect(response.body.length).toBe(undefined);
    });
  });

  //Check if we make a put request
  describe("PUT /api/news enpoint", () => {
    it("should return a 404 status code", async () => {
      const response = await request(app)
        .put("/api/news")
        .query({ category: "general" });
      expect(response.statusCode).toBe(404);
      expect(response.body).toBeDefined();
      expect(response.body.length).toBe(undefined);
    });
  });

  //Check if the articles are returned
  describe("GET /api/news enpoint", () => {
    it("should return a 200 status code", async () => {
      const response = await request(app)
        .get("/api/news/category")
        .query({ category: "general" });
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0].title).toBeDefined();
      expect(response.body[0].description).toBeDefined();
      expect(response.body[0].url).toBeDefined();
      expect(response.body[0].urlToImage).toBeDefined();
      expect(response.body[0].publishedAt).toBeDefined();
      expect(response.body[0].content).toBeDefined();
    });
  });

  //Check if the returned atricles content is not empty
  describe("GET /api/news enpoint", () => {
    it("should return a 200 status code", async () => {
      const response = await request(app)
        .get("/api/news/category")
        .query({ category: "general" });
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0].title).not.toBe("");
      expect(response.body[0].description).not.toBe("");
      expect(response.body[0].url).not.toBe("");
      expect(response.body[0].urlToImage).not.toBe("");
      expect(response.body[0].publishedAt).not.toBe("");
      expect(response.body[0].content).not.toBe("");
    });
  });

  //Check if the returned articles url is valid
  describe("GET /api/news enpoint", () => {
    it("should return a 200 status code", async () => {
      const response = await request(app)
        .get("/api/news/category")
        .query({ category: "general" });
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0].url).toMatch(/^(http|https):\/\/[^ "]+$/);
    });
  });

  //Check if the returned articles urlToImage is valid
  describe("GET /api/news enpoint", () => {
    it("should return a 200 status code", async () => {
      const response = await request(app)
        .get("/api/news/category")
        .query({ category: "general" });
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0].urlToImage).toMatch(/^(http|https):\/\/[^ "]+$/);
    });
  });

  //Check if the returned articles publishedAt is valid
  describe("GET /api/news enpoint", () => {
    it("should return a 200 status code", async () => {
      const response = await request(app)
        .get("/api/news/category")
        .query({ category: "general" });
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0].publishedAt).toMatch(
        /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})Z$/
      );
    });
  });

  //Check if the returned articles source has name and id
  describe("GET /api/news enpoint", () => {
    it("should return a 200 status code", async () => {
      const response = await request(app)
        .get("/api/news/category")
        .query({ category: "general" });
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0].source.name).toBeDefined();
      expect(response.body[0].source.id).toBeDefined();
    });
  });

  //Check new end point
  describe("POST /api/news/{user} enpoint", () => {
    const user = {
      preferences: {
        general: true,
        business: false,
        entertainment: false,
        health: true,
        science: false,
        sports: false,
        technology: false,
      },
      _id: "642a59bb993bcfbe59c2791b",
      hashedPassword:
        "b285e393a516e7c0cdf900b1f1a79c270d4733cfc6d93285ff41f2a80445fef4",
      username: "Chaitanya",
      __v: 0,
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkNoYWl0YW55YSIsImlkIjoiNjQyYTU5YmI5OTNiY2ZiZTU5YzI3OTFiIiwiaWF0IjoxNjgwNTYyNTU4fQ.fNLfm6wreu1D_mNlWhPfCbhjBQ6JHFZ6wtPlhU-rWPs",
    };
    it("should return a 200 status code", async () => {
      const response = await request(app).post(`/api/news`).send({user});
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body.length).toBeGreaterThan(0);
      
    });

    it("should return a 401 status code if no user data is provided", async () => {
      const response = await request(app).post(`/api/news`);
      expect(response.statusCode).toBe(401);
      expect(response.body).toBeDefined();
      expect(response.body.message).toBe("Unauthorized");
    });

    it("should return uniques titles", async () => {  
      const response = await request(app).post(`/api/news`).send({user});
      const titles = response.body.map((article) => article.title);
      const uniqueTitles = [...new Set(titles)];
      expect(uniqueTitles.length).not.toBe(titles.length);
    }
    );

  });

  //check search endpoint
  describe("GET /api/news/search enpoint", () => {
    it("should return a 200 status code", async () => {
      const response = await request(app)
        .get("/api/news/search")
        .query({ query: "tesla" });
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0].title).toBeDefined();
      expect(response.body[0].description).toBeDefined();
      expect(response.body[0].url).toBeDefined();
      expect(response.body[0].urlToImage).toBeDefined();
      expect(response.body[0].publishedAt).toBeDefined();
      expect(response.body[0].content).toBeDefined();
    });
  });

});
