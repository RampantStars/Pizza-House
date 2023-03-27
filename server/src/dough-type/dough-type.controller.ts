import { DoughType } from './entities/dough-type.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger/dist';
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

@ApiTags('Тип теста')
@Controller('doughType')
export class DoughTypeController {
  constructor(private readonly doughTypeService: DoughTypeService) {}

  @ApiOperation({ summary: 'Добавление типа теста' })
  @ApiResponse({ status: 200, type: DoughType })
  @Post()
  create(@Body() createDoughTypeDto: CreateDoughTypeDto) {
    return this.doughTypeService.createDoughType(createDoughTypeDto);
  }

  @ApiOperation({ summary: 'Получение всех типов теста' })
  @ApiResponse({ status: 200, type: [DoughType] })
  @Get()
  findAll() {
    return this.doughTypeService.findAllDoughType();
  }

  @ApiOperation({ summary: 'Получение типа теста' })
  @ApiResponse({ status: 200, type: DoughType })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doughTypeService.findOneDoughType(+id);
  }

  @ApiOperation({ summary: 'Обновление типа теста' })
  @ApiResponse({ status: 200, type: DoughType })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDoughTypeDto: UpdateDoughTypeDto,
  ) {
    return this.doughTypeService.updateDoughType(+id, updateDoughTypeDto);
  }

  @ApiOperation({ summary: 'Удаление типа теста' })
  @ApiResponse({ status: 200, type: DoughType })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doughTypeService.removeDoughType(+id);
  }
}
