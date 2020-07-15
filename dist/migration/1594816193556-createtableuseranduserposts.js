"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createtableuseranduserposts1594816193556 = void 0;

class createtableuseranduserposts1594816193556 {
  constructor() {
    this.name = 'createtableuseranduserposts1594816193556';
  }

  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "user" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL,
                "email" character varying(100) NOT NULL,
                "senha" character varying(100) NOT NULL)`);
    await queryRunner.query(`CREATE TABLE "user_posts" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "id_user" uuid NOT NULL,
                "id_posts" uuid NOT NULL,
                CONSTRAINT "PK_3ef0759852caaefb9bac7cf913e" PRIMARY KEY ("id_user", "id_posts"))`);
    await queryRunner.query(`CREATE INDEX "IDX_ccb4ae4609bfbf4d022560a3f8" ON "user_posts" ("id_user") `);
    await queryRunner.query(`CREATE INDEX "IDX_9a616bdfff1c46bddeb8ad78db" ON "user_posts" ("id_posts") `);
    await queryRunner.query(`ALTER TABLE "user_posts" ADD CONSTRAINT "FK_ccb4ae4609bfbf4d022560a3f8c" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "user_posts" ADD CONSTRAINT "FK_9a616bdfff1c46bddeb8ad78dbf" FOREIGN KEY ("id_posts") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
  }

  async down(queryRunner) {}

}

exports.createtableuseranduserposts1594816193556 = createtableuseranduserposts1594816193556;