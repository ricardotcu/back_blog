import {MigrationInterface, QueryRunner} from "typeorm";

export class createtableposts1594718253831 implements MigrationInterface {

    name = 'createtableposts1594718253831';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "posts" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL,
                "caminho" character varying(100) NOT NULL`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "posts"`);
    }

}
