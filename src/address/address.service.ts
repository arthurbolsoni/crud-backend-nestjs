import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID, Repository } from 'typeorm';
import { CreateAddressDto } from './dto/createAddress.dto';
import { UpdateAddressDto } from './dto/updateAddress.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address) private addressPepository: Repository<Address>,
  ) { }

  async create(addressDto: CreateAddressDto): Promise<Address> {
    return await this.addressPepository.create({ ...addressDto });
  }
  async updateByRelation(updateDto: UpdateAddressDto[], relationId: number, relationField: string): Promise<boolean> {
    const updated = await this.addressPepository.createQueryBuilder().update(Address).set(updateDto[0]).where({"id":updateDto[0].id, [relationField]: relationId}).execute()
    return Boolean(updated.affected);
  }
}