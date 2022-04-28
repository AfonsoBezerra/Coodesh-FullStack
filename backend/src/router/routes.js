import { Router } from "express";
import InitialRoute from "../controller/InitialRoute";
import ShowAllArticles from "../controller/ShowAllArticles";
import ShowOneArticle from "../controller/ShowOneArticle";

const routes = Router();

routes.get('/', InitialRoute.handle);

routes.get('/articles', ShowAllArticles.handle);

routes.get('/articles/:title', ShowOneArticle.handle);

export default routes;
