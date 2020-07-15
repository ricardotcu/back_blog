import { Router } from 'express';
import cors from 'cors';
import { getHome } from './controller/HomeController';
import { login, register } from './controller/AccountController';
import { auth } from './middlewares/auth';

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
      "https://reverent-galileo-04732f.netlify.app",
      "https://reverent-galileo-04732f.netlify.app/",
      "https://reverent-galileo-04732f.netlify.app/home"
  ],
  preflightContinue: false
};

//use cors middleware
routes.use(cors(options));

routes.get('/', getHome); //feito
routes.post('/login', login); //feito
routes.post('/register', register); //feito
routes.get('/home', getHome); //feito

//middleware autenticacao
routes.use(auth);


export default routes;