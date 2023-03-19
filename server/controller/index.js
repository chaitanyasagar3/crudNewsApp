import userController from "./user.controller.js";
import newsController from "./news.controller.js";


const configureRoutes = (app) => {
  app.use("/api/news", newsController);
  app.use("/api/", userController);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

export default configureRoutes;
