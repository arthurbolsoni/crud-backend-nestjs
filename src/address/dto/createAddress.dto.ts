import { Transform, Type } from 'class-transformer';
import {
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
import { MaxDateString } from 'src/common/decorators/MaxDateString.decorator';
import { addressType } from '../enum/address.enum';

//DTO type to create a new user.
export class CreateAddressDto {
  @IsNotEmpty()
  @Min(9)
  @Max(9)
  CEP: string;

  @IsNotEmpty()
  @IsString()
  logradouro: string;

  @IsNotEmpty()
  @IsInt()
  numero: number;

  @IsNotEmpty()
  @IsString()
  bairro: string;

  @IsOptional()
  @IsString()
  complemento: string;

  @IsNotEmpty()
  @IsString()
  cidade: string;

  @IsNotEmpty()
  @Length(2, 2)
  @IsString()
  uf: string;

  @IsNotEmpty()
  @IsEnum(addressType)
  @IsInt()
  tipo: addressType;
}
