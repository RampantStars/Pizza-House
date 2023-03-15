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

@Controller('typeIngredient')
export class TypeIngredientController {
  constructor(private readonly typeIngredientService: TypeIngredientService) {}

  @Post()
  create(@Body() createTypeIngredientDto: CreateTypeIngredientDto) {
    return this.typeIngredientService.createTypeIngredient(
      createTypeIngredientDto,
    );
  }

  @Get()
  findAll() {
    return this.typeIngredientService.findAllTypeIngredient();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeIngredientService.findOneTypeIngredient(+id);
  }

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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeIngredientService.removeTypeIngredient(+id);
  }
}
