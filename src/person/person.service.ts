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
  ) {}

  //create a person on the database using the validated data from dto type
  async create(createPersonDto: CreatePersonDto) {
    const { addresses, ...dtoPerson } = createPersonDto;
    // const addressSaved = await this.addressService.create({ ...addresses })

    const person = new Person({
      ...dtoPerson,
      addresses: addresses as Address[],
    });
    return await this.personRepository.save(person);
  }

  //return all person from the database with their address
  findAll() {
    return this.personRepository.find({
      relations: {
        addresses: true,
      },
    });
  }

  async findOneById(id: number) {
    const person = await this.personRepository.findOne({
      where: {
        id: id,
      },
      relations: ['addresses'],
    });

    if (person) return person;

    throw new HttpException(
      'Cannot find the person with the given id',
      HttpStatus.NOT_FOUND,
    );
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    const { addresses, ...dtoPerson } = updatePersonDto;

    const personFinded = await this.findOneById(id);
    const addressList = addresses.filter((x) =>
      personFinded.addresses.find((y) => x.id == y.id),
    ); //filter all address
    const person = new Person({ ...dtoPerson, id: +id });
    if (addressList.length != 0) person.addresses = addressList as Address[];
    return this.personRepository.save(person);

    return;
    if (addresses)
      await this.addressService.updateByRelation(addresses, id, 'personId');

    const updatedPerson = await this.personRepository.update(
      id,
      new Person({ ...dtoPerson }),
    );

    if (updatedPerson.affected) return 'Person was updated with success!';

    throw new HttpException('Person id not found', HttpStatus.NOT_FOUND);
  }

  //seek for person by id and delete it
  async remove(id: number) {
    const person = await this.findOneById(id);
    const removed = await this.personRepository.softDelete(id);
    if (removed) return 'Person was removed with success!';
  }
}
