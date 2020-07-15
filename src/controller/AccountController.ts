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
    return res.json(user);
}

//loga
export const login = async(req: Request, res: Response) => {
  const { email, senha} = req.body;
  const secret = "84edbc64b2e424f48fd21c08e26d9dd9";

  const user = await getRepository(User).find({
      where: {
          email
      }
  });
  
  if(user.length === 1){ 
      if(await bcrypt.compare(senha, user[0].senha)){
          const token = jwt.sign({ id: user[0].id }, secret, {
              expiresIn: '1d'
          });

          const data = {
              id: user[0].id,
              nome: user[0].nome,
              email: user[0].email,
              token
          }

          return res.json(data);
      }
      else{
          return res.status(404).json({message: 'user nao existe'});
      }
  }
  else{
      return res.status(404).json({message: 'erro ao logar'});
  }
}
