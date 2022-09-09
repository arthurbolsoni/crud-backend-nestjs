import { MigrationInterface, QueryRunner } from "typeorm";

export class update1662750225629 implements MigrationInterface {
    name = 'update1662750225629'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`person\` ADD UNIQUE INDEX \`IDX_afbfed3ac369de895f6ae92510\` (\`IdCard\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`person\` DROP INDEX \`IDX_afbfed3ac369de895f6ae92510\``);
    }

}
