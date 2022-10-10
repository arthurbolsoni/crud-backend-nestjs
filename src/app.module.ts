import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { AddressModule } from './address/address.module';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();
const configService = new ConfigService();

@Module({
  imports: [
    PersonModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: configService.get('MYSQL_HOST'),
      port: configService.get('MYSQL_PORT'),
      username: configService.get('MYSQL_USER'),
      password: configService.get('MYSQL_PASSWORD'),
      database: configService.get('MYSQL_DATABASE'),
      migrationsRun: true,
      autoLoadEntities: true,
    }),
    AddressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
