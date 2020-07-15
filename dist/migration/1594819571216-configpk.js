"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configpk1594819571216 = void 0;

class configpk1594819571216 {
  constructor() {
    this.name = 'configpk1594819571216';
  }

  async up(queryRunner) {
    await queryRunner.query("DROP TABLE user_posts");
    await queryRunner.query(`CREATE TABLE "user_posts" (
      "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
      "id_user" uuid UNIQUE NOT NULL,
      "id_posts" uuid UNIQUE NOT NULL,
      CONSTRAINT "PK_3ef0759852caaefb9bac7cf913e" PRIMARY KEY ("id_user", "id_posts"))`);
    await queryRunner.query(`ALTER TABLE "user_posts" ADD CONSTRAINT "FK_ccb4ae4609bfbf4d022560a3f8c" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "user_posts" ADD CONSTRAINT "FK_9a616bdfff1c46bddeb8ad78dbf" FOREIGN KEY ("id_posts") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
  }

  async down(queryRunner) {}

}

exports.configpk1594819571216 = configpk1594819571216;