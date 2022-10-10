import { DataSource } from 'typeorm';

import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();
const configService = new ConfigService();

export const AppDataSource = new DataSource({
  migrationsTableName: 'migrations',
  type: 'mysql',
  host: configService.get('MYSQL_HOST'),
  port: configService.get('MYSQL_PORT'),
  username: configService.get('MYSQL_USER'),
  password: configService.get('MYSQL_PASSWORD'),
  database: configService.get('MYSQL_DATABASE'),
  logging: false,
  synchronize: false,
  migrationsRun: true,
  name: 'default',
  entities: ['dist/**/*.entity.js'],
  migrations: ['./src/orm/migration/*{.ts,.js}'],
  subscribers: ['./src/orm/subscriber/**/*{.ts,.js}'],
});
