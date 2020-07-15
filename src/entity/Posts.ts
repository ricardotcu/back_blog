import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('posts')
export class Posts{
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("varchar")
    nome: string;

    @Column("varchar")
    caminho: string;
}