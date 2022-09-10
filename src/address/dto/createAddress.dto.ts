import { Transform, Type } from 'class-transformer';
import {
  Equals,
  IsDate,
  IsDateString,
  IsEnum,
  IsInt,
  IsISO8601,
  isNotEmpty,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  Length,
  Max,
  maxDate,
  MaxDate,
  MaxLength,
  Min,
  MinDate,
  MinLength,
} from 'class-validator';
import { IsLengthEqual } from 'src/common/decorators/IsLengthEqual.decorator';
import { MaxDateString } from 'src/common/decorators/MaxDateString.decorator';
import { AddressType } from '../enum/address.enum';

//DTO type to create a new user.
export class CreateAddressDto {
  @IsNotEmpty()
  @IsLengthEqual(9)
  CEP: string;

  @IsString()
  street: string;

  @IsInt()
  number: number;

  @IsString()
  district: string;

  @IsString()
  addressLineTwo: string;

  @IsString()
  city: string;

  @IsLengthEqual(2)
  @IsString()
  uf: string;

  @IsEnum(AddressType)
  @IsInt()
  addressType: AddressType;
}
