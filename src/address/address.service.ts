import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/createAddress.dto';
import { UpdateAddressDto } from './dto/updateAddress.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address) private addressPepository: Repository<Address>,
  ) {}

  async create(addressDto: CreateAddressDto): Promise<Address> {
    return await this.addressPepository.create({ ...addressDto });
  }
  async update(updateDto: UpdateAddressDto): Promise<boolean> {
    console.log(updateDto);
    const Id = updateDto.id;
    const {id, ...dtoUpdate} = updateDto;
    const updated = await this.addressPepository.update(Id, { ...dtoUpdate });
    return Boolean(updated.affected);
  }
}