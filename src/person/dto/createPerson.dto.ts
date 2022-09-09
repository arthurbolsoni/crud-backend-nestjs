import { Transform, Type } from 'class-transformer';
import {
  IsDate,
  IsDateString,
  IsEnum,
  IsInt,
  IsISO8601,
  IsNotEmpty,
  IsNumberString,
  Length,
  maxDate,
  MaxDate,
  MaxLength,
  MinDate,
} from 'class-validator';
import { Address } from 'src/address/entities/address.entity';
import { MaxDateString } from 'src/common/decorators/MaxDateString.decorator';
import { personType } from '../enum/person.enum';

//DTO type to create a new user.
export class CreatePersonDto {
  @IsNotEmpty()
  @MaxLength(150)
  name: string;

  //criar uma validaçao regex
  @IsNotEmpty()
  @Length(11, 14)
  IdCard: string;

  @IsNotEmpty()
  @IsEnum(personType)
  @IsInt()
  personType: personType;

  @IsNotEmpty()
  @IsISO8601()
  @MaxDateString(new Date())
  birthday: Date;

  @IsNotEmpty()
  address: string;
}
