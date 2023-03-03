import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DoughTypeService } from './dough-type.service';
import { CreateDoughTypeDto } from './dto/create-dough-type.dto';
import { UpdateDoughTypeDto } from './dto/update-dough-type.dto';

@Controller('doughType')
export class DoughTypeController {
  constructor(private readonly doughTypeService: DoughTypeService) {}

  @Post()
  create(@Body() createDoughTypeDto: CreateDoughTypeDto) {
    return this.doughTypeService.createDoughType(createDoughTypeDto);
  }

  @Get()
  findAll() {
    return this.doughTypeService.findAllDoughType();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doughTypeService.findOneDoughType(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDoughTypeDto: UpdateDoughTypeDto,
  ) {
    return this.doughTypeService.updateDoughType(+id, updateDoughTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doughTypeService.removeDoughType(+id);
  }
}
