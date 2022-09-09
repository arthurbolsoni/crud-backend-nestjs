import { MigrationInterface, QueryRunner } from "typeorm";

export class base1662724389344 implements MigrationInterface {
    name = 'base1662724389344'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`address\` (\`id\` int NOT NULL AUTO_INCREMENT, \`CEP\` varchar(255) NOT NULL, \`street\` varchar(255) NOT NULL, \`number\` int NOT NULL, \`district\` varchar(255) NOT NULL, \`AddressLineTwo\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, \`uf\` varchar(255) NOT NULL, \`addressType\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`person\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`IdCard\` varchar(255) NOT NULL, \`personType\` int NOT NULL, \`birthday\` datetime NOT NULL, \`address\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`person\``);
        await queryRunner.query(`DROP TABLE \`address\``);
    }

}
