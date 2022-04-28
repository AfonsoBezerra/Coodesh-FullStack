import express from "express";
import mongoose from "mongoose";
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import cors from 'cors';

import routes from "../router/routes";
import CronArticle from "../config/CronDataArticle";
import ScriptInsertData from "../config/ScriptInsertData";

class App {
  constructor() {
    CronArticle.start();

    this.server = express();

    this.middlewares();
    mongoose.connect(process.env.CLUSTER_OF_CONNECT_MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    this.routes();

    ScriptInsertData();
  }

  middlewares() {
    dotenv.config();
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use("/api-coodesh", swaggerUi.serve, swaggerUi.setup());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
