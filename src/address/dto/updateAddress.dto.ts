import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressDto } from './createAddress.dto';

export class UpdateAddressDto extends PartialType(CreateAddressDto) {}
