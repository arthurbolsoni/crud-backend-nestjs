import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/createPerson.dto';
import { UpdatePersonDto } from './dto/updatePerson.dto';
import { paramsDto } from './dto/params.dto';
import { PartialBody } from 'common/decorators/partial-body.decorator';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get()
  findAll() {
    return this.personService.findAll();
  }

  @Get(':id')
  findOneById(@Param() params: paramsDto) {
    return this.personService.findOneById(params.id);
  }

  @Put(['', ':id'])
  // update(@Param() param: paramsDto, @PartialBody() updatePersonDto: UpdatePersonDto) {
  update(@Param() param: paramsDto, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personService.update(param.id, updatePersonDto);
  }

  @Delete(['', ':id'])
  remove(@Param() param: paramsDto) {
    return this.personService.remove(param.id);
  }
}
