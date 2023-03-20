import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { Size } from './entities/size.entity';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SizeService } from './size.service';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';

@ApiTags('Размер пиццы')
@Controller('size')
export class SizeController {
  constructor(private readonly sizeService: SizeService) {}

  @ApiOperation({ summary: 'Добавление размера пиццы' })
  @ApiResponse({ status: 200, type: Size })
  @Post()
  create(@Body() createSizeDto: CreateSizeDto) {
    return this.sizeService.createSize(createSizeDto);
  }
  @ApiOperation({ summary: 'Получение всех размеров пиццы' })
  @ApiResponse({ status: 200, type: [Size] })
  @Get()
  findAll() {
    return this.sizeService.findAllSize();
  }

  @ApiOperation({ summary: 'Получение размера пиццы' })
  @ApiResponse({ status: 200, type: Size })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sizeService.findOneSize(+id);
  }

  @ApiOperation({ summary: 'Изменение размера пиццы' })
  @ApiResponse({ status: 200, type: Size })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSizeDto: UpdateSizeDto) {
    return this.sizeService.updateSize(+id, updateSizeDto);
  }

  @ApiOperation({ summary: 'Удаление размера пиццы' })
  @ApiResponse({ status: 200, type: Size })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sizeService.removeSize(+id);
  }
}
