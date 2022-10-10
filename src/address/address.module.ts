import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressService } from './address.service';
import { Address } from './entities/address.entity';

@Module({
  exports: [AddressService],
  imports: [TypeOrmModule.forFeature([Address])],
  providers: [AddressService],
})
export class AddressModule {}
