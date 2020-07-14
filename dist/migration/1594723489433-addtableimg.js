"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addtableimg1594723489433 = void 0;

class addtableimg1594723489433 {
  async up(queryRunner) {
    await queryRunner.query("INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/a.jpg')");
    await queryRunner.query("INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/a.jpg')");
  }

  async down(queryRunner) {}

}

exports.addtableimg1594723489433 = addtableimg1594723489433;