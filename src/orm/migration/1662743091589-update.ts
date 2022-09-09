import { MigrationInterface, QueryRunner } from "typeorm";

export class update1662743091589 implements MigrationInterface {
    name = 'update1662743091589'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`person\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`IdCard\` varchar(255) NOT NULL, \`personType\` int NOT NULL, \`birthday\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`address\` (\`id\` int NOT NULL AUTO_INCREMENT, \`CEP\` varchar(255) NOT NULL, \`street\` varchar(255) NOT NULL, \`number\` int NOT NULL, \`district\` varchar(255) NOT NULL, \`addressLineTwo\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, \`uf\` varchar(255) NOT NULL, \`addressType\` int NOT NULL, \`personId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`address\` ADD CONSTRAINT \`FK_e3d0b5ba0387be88105ad7683bb\` FOREIGN KEY (\`personId\`) REFERENCES \`person\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`address\` DROP FOREIGN KEY \`FK_e3d0b5ba0387be88105ad7683bb\``);
        await queryRunner.query(`DROP TABLE \`address\``);
        await queryRunner.query(`DROP TABLE \`person\``);
    }

}
