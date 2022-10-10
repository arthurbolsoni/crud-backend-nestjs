import { UsePipes, ValidationPipe } from '@nestjs/common';
import { OmitType, PartialType, PickType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from 'src/address/dto/createAddress.dto';
import { UpdateAddressDto } from 'src/address/dto/updateAddress.dto';
import { CreatePersonDto } from './createPerson.dto';

export class UpdatePersonDto extends PartialType(
  OmitType(CreatePersonDto, ['addresses']),
) {
  @ValidateNested()
  @Type(() => UpdateAddressDto)
  addresses: UpdateAddressDto[];
}
