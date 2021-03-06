import {MigrationInterface, QueryRunner} from "typeorm";

export class addtableposts1594720728848 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img_1.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img_2.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img_3.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img_4.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img_5.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img_6.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img_7.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img_8.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img_9.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img_10.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img_11.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img_12.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img_bg_1.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img_bg_2.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/person_1.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/person_2.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/square-person_1.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/square-person_2.jpg')"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
