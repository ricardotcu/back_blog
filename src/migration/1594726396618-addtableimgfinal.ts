import {MigrationInterface, QueryRunner} from "typeorm";

export class addtableimgfinal1594726396618 implements MigrationInterface {
    
    
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
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img3.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img4.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img5.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img6.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img7.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img8.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img9.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img10.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img11.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img12.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img13.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img14.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img15.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img16.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img17.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img18.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img19.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img20.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img21.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img22.jpg')"
        )
        ;await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img23.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img24.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img25.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img26.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img27.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img28.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img29.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img30.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img31.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img32.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img33.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img34.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img35.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img36.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img37.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img38.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img39.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img40.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img41.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img42.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img43.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img44.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img45.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img46.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img47.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img48.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img49.jpg')"
        );
        await queryRunner.query(
            "INSERT INTO posts (nome, caminho) VALUES ('posts', '../../assets/images/img50.jpg')"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
