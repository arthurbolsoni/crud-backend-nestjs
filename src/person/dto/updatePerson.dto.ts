import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressDto } from 'src/address/dto/createAddress.dto';
import { UpdateAddressDto } from 'src/address/dto/updateAddress.dto';
import { CreatePersonDto } from './createPerson.dto';

export class UpdatePersonDto extends PartialType(CreatePersonDto) {
    
}
