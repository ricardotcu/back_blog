"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _cors = _interopRequireDefault(require("cors"));

var _HomeController = require("./controller/HomeController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)(); //opçoes para cors midddleware

const options = {
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token", "Authorization"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: ["*", "https://zen-poincare-31d36c.netlify.app", "https://zen-poincare-31d36c.netlify.app/", "https://zen-poincare-31d36c.netlify.app/chome"],
  preflightContinue: false
}; //use cors middleware

routes.use((0, _cors.default)(options));
routes.get('/', _HomeController.getHome); //feito

routes.get('/home', _HomeController.getHome); //feito

var _default = routes;
exports.default = _default;