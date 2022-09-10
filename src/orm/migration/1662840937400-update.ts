import { MigrationInterface, QueryRunner } from "typeorm";

export class update1662840937400 implements MigrationInterface {
    name = 'update1662840937400'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`person\` DROP COLUMN \`is_deleted\``);
        await queryRunner.query(`ALTER TABLE \`person\` ADD \`deletedAt\` timestamp(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`person\` ADD \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`person\` ADD \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`person\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`person\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`person\` DROP COLUMN \`deletedAt\``);
        await queryRunner.query(`ALTER TABLE \`person\` ADD \`is_deleted\` tinyint NOT NULL DEFAULT '0'`);
    }

}
