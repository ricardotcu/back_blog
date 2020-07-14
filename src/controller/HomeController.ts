import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Posts } from '../entity/Posts';
//import { Home } from '../models/Home'

//retorna os produtos da home page, produtos marcados como mais vendidos
export const getHome = async (req: Request, res: Response) => {

    const destaques = await getRepository(Posts).find();

    return res.json();
}