import { Router } from 'express';
import { getHome } from './controller/HomeController';

const routes = Router();

//use cors middleware

routes.get('/', getHome); //feito

export default routes;