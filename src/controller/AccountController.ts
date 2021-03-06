import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import { User } from '../entity/User';
import * as jwt from 'jsonwebtoken';

//cria usuario no banc
export const register = async(req: Request, res: Response) => {
    const { nome, email, senha } = req.body;

    const senha_hash = await bcrypt.hash(senha, 8);

    const user = await getRepository(User).save({
        nome,
        email,
        senha: senha_hash
    });
    console.log(user)
    return res.json(user);
}

//loga
export const login = async(req: Request, res: Response) => {
  const { email, senha, posts} = req.body;
  const secret = "84edbc64b2e424f48fd21c08e26d9dd9";

  const user = await getRepository(User).find({
      where: {
          email
      }
  });
    console.log(user.length)
    if (user.length === 1) { 
      console.log('hfhfhu')
      if(await bcrypt.compare(senha, user[0].senha)){
          const token = jwt.sign({ id: user[0].id }, secret, {
              expiresIn: '1d'
          });

          const data = {
              id: user[0].id,
              nome: user[0].nome,
              email: user[0].email,
              posts,
              token
          }
          console.log(data)

          return res.json(data);
      }
      else{
          return res.status(404).json({message: 'user nao existe'});
      }
  }
  else{
      return res.status(404).json({message: 'eerro ao logar'});
  }
}

export const getUser = async(req: Request, res: Response) => {
    const user = await getRepository(User).find();

    console.log(user)

    return res.json(user);
}