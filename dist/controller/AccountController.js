"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = exports.login = exports.register = void 0;

var _typeorm = require("typeorm");

var bcrypt = _interopRequireWildcard(require("bcrypt"));

var _User = require("../entity/User");

var jwt = _interopRequireWildcard(require("jsonwebtoken"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//cria usuario no banc
const register = async (req, res) => {
  const {
    nome,
    email,
    senha
  } = req.body;
  const senha_hash = await bcrypt.hash(senha, 8);
  const user = await (0, _typeorm.getRepository)(_User.User).save({
    nome,
    email,
    senha: senha_hash
  });
  console.log(user);
  return res.json(user);
}; //loga


exports.register = register;

const login = async (req, res) => {
  const {
    email,
    senha,
    posts
  } = req.body;
  const secret = "84edbc64b2e424f48fd21c08e26d9dd9";
  const user = await (0, _typeorm.getRepository)(_User.User).find({
    where: {
      email
    }
  });
  console.log(user.length);

  if (user.length === 1) {
    console.log('hfhfhu');

    if (await bcrypt.compare(senha, user[0].senha)) {
      const token = jwt.sign({
        id: user[0].id
      }, secret, {
        expiresIn: '1d'
      });
      const data = {
        id: user[0].id,
        nome: user[0].nome,
        email: user[0].email,
        posts,
        token
      };
      console.log(data);
      return res.json(data);
    } else {
      return res.status(404).json({
        message: 'user nao existe'
      });
    }
  } else {
    return res.status(404).json({
      message: 'eerro ao logar'
    });
  }
};

exports.login = login;

const getUser = async (req, res) => {
  const user = await (0, _typeorm.getRepository)(_User.User).find();
  console.log(user);
  return res.json(user);
};

exports.getUser = getUser;