import {MigrationInterface, QueryRunner} from "typeorm";

export class addtableimgfinal11594727538613 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "DELETE FROM posts WHERE nome = 'posts'"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img1.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img2.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img3.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img4.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img5.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img6.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img7.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img8.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img9.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img10.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img11.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img12.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img13.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img14.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img15.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img16.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img17.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img18.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img19.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img20.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img21.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img22.jpeg')"
        )
        ;await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img23.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img24.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img25.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img26.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img27.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img28.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img29.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img30.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img31.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img32.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img33.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img34.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img35.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img36.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img37.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img38.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img39.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img40.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img41.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img42.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img43.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img44.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img45.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img46.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img47.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img48.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img49.jpeg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img50.jpeg')"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
