import { IsNotEmpty, IsNumberString } from 'class-validator';

//DTO type to ids params.
export class paramsDto {
  @IsNumberString()
  @IsNotEmpty()
  id: number;
}
