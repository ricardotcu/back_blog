"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHome = void 0;

var _typeorm = require("typeorm");

var _Posts = require("../entity/Posts");

//import { Home } from '../models/Home'
//retorna os produtos da home page, produtos marcados como mais vendidos
const getHome = async (req, res) => {
  const destaques = await (0, _typeorm.getRepository)(_Posts.Posts).find();
  return res.json(destaques);
};

exports.getHome = getHome;