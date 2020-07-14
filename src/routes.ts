import { Router } from 'express';
import cors from 'cors';
import { getHome } from './controller/HomeController';

const routes = Router();

//opçoes para cors midddleware
const options:cors.CorsOptions = {
  allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "X-Access-Token",
      "Authorization"
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: [
      "*",
      "https://5f0d88be75de0d00071dfbf9--reverent-galileo-04732f.netlify.app/home",
      "https://5f0d88be75de0d00071dfbf9--reverent-galileo-04732f.netlify.app/home/",
      "https://5f0d88be75de0d00071dfbf9--reverent-galileo-04732f.netlify.app/home/home"
  ],
  preflightContinue: false
};

//use cors middleware
routes.use(cors(options));

routes.get('/', getHome); //feito
routes.get('/home', getHome); //feito

export default routes;