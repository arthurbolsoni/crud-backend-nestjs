import { Transform, Type } from 'class-transformer';
import {
  Equals,
  IsDate,
  IsDateString,
  IsEnum,
  IsInt,
  IsISO8601,
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

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsInt()
  number: number;

  @IsNotEmpty()
  @IsString()
  district: string;

  @IsOptional()
  @IsString()
  addressLineTwo: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsLengthEqual(2)
  @IsString()
  uf: string;

  @IsNotEmpty()
  @IsEnum(AddressType)
  @IsInt()
  addressType: AddressType;
}
