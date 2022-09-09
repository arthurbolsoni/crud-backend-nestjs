import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonDto } from './createPerson.dto';

export class UpdatePersonDto extends PartialType(CreatePersonDto) {}
