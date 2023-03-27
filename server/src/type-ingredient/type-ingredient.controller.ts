import { TypeIngredient } from './entities/type-ingredient.entity';
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
import { TypeIngredientService } from './type-ingredient.service';
import { CreateTypeIngredientDto } from './dto/create-type-ingredient.dto';
import { UpdateTypeIngredientDto } from './dto/update-type-ingredient.dto';

@ApiTags('Тип ингредиента')
@Controller('typeIngredient')
export class TypeIngredientController {
  constructor(private readonly typeIngredientService: TypeIngredientService) {}

  @ApiOperation({ summary: 'Добавление типа ингредиента' })
  @ApiResponse({ status: 200, type: TypeIngredient })
  @Post()
  create(@Body() createTypeIngredientDto: CreateTypeIngredientDto) {
    return this.typeIngredientService.createTypeIngredient(
      createTypeIngredientDto,
    );
  }

  @ApiOperation({ summary: 'Получение всех типов ингредиента' })
  @ApiResponse({ status: 200, type: [TypeIngredient] })
  @Get()
  findAll() {
    return this.typeIngredientService.findAllTypeIngredient();
  }

  @ApiOperation({ summary: 'Получение типа ингредиента' })
  @ApiResponse({ status: 200, type: TypeIngredient })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeIngredientService.findOneTypeIngredient(+id);
  }

  @ApiOperation({ summary: 'Изменение типа ингредиента' })
  @ApiResponse({ status: 200, type: TypeIngredient })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTypeIngredientDto: UpdateTypeIngredientDto,
  ) {
    return this.typeIngredientService.updateTypeIngredient(
      +id,
      updateTypeIngredientDto,
    );
  }

  @ApiOperation({ summary: 'Удаление типа ингредиента' })
  @ApiResponse({ status: 200, type: TypeIngredient })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeIngredientService.removeTypeIngredient(+id);
  }
}
