"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createtableposts1594718253831 = void 0;

class createtableposts1594718253831 {
  constructor() {
    this.name = 'createtableposts1594718253831';
  }

  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "posts" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL,
                "caminho" character varying(100) NOT NULL`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "posts"`);
  }

}

exports.createtableposts1594718253831 = createtableposts1594718253831;