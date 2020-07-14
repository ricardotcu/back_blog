import {MigrationInterface, QueryRunner} from "typeorm";

export class addtableimg1594723489433 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/a.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/a.jpg')"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
