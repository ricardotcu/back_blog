import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Posts } from './Posts';

@Entity()
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("varchar")
    nome: string;

    @Column("varchar")
    email: string;
  
    @Column("varchar")
    senha: string;
  
    @ManyToMany(type => Posts)
    @JoinTable()
    posts: Posts;
  
  
}