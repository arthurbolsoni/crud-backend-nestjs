import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Console } from 'console';
import { AddressService } from 'src/address/address.service';
import { CreateAddressDto } from 'src/address/dto/createAddress.dto';
import { Address } from 'src/address/entities/address.entity';
import { Repository } from 'typeorm';
import { CreatePersonDto } from './dto/createPerson.dto';
import { UpdatePersonDto } from './dto/updatePerson.dto';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person) private personRepository: Repository<Person>,
    private addressService: AddressService,
  ) { }

  //create a person on the database using the validated data from dto type
  async create(createPersonDto: CreatePersonDto) {
    const address = await this.addressService.create({...createPersonDto.addressDto})

    const person = new Person({ ...createPersonDto, addresses: [address]});
    return await this.personRepository.save(person);
  }

  //return all person from the database with their address
  findAll() {
    return this.personRepository.find({
      relations: {
        addresses: true,
      },
    })
  }

  //precisa retornar erro ou valor
  async findOneById(id: number) {
    const person = await this.personRepository.findOne({
      where: {
        id: id
      },
      relations: ['addresses'],
    });

    if (person) return person;

    throw new HttpException(
      'Cannot find the person with the given id',
      HttpStatus.NOT_FOUND,
    );
  }

  //precisa retornar erro ou valor
  async update(id: number, updatePersonDto: UpdatePersonDto) {
    const updatedPerson = await this.personRepository.update(id, {
      ...updatePersonDto
    });
    if (updatedPerson.affected) return 'Person was updated with success!';

    throw new HttpException('Person id not found', HttpStatus.NOT_FOUND);
  }

  //precisa retornar erro ou valor
  //seek for person by id and delete it
  async remove(id: number) {
    const person = await this.findOneById(id);
    const removed = await this.personRepository.remove(person);
    if (removed) return 'Person was removed with success!';
  }
}
