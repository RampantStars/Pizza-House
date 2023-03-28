import { ApiTags } from '@nestjs/swagger/dist';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PizzaVariationService } from './pizza-variation.service';
import { CreatePizzaVariationDto } from './dto/create-pizza-variation.dto';
import { UpdatePizzaVariationDto } from './dto/update-pizza-variation.dto';

@ApiTags('Вариация заказанной пиццы')
@Controller('pizzaVariation')
export class PizzaVariationController {
  constructor(private readonly pizzaVariationService: PizzaVariationService) {}

  @Post()
  create(@Body() createPizzaVariationDto: CreatePizzaVariationDto) {
    return this.pizzaVariationService.createPizzaVariation(
      createPizzaVariationDto,
    );
  }

  @Get()
  findAll() {
    return this.pizzaVariationService.findAllPizzaVariation();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pizzaVariationService.findOnePizzaVariation(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePizzaVariationDto: UpdatePizzaVariationDto,
  ) {
    return this.pizzaVariationService.updatePizzaVariation(
      +id,
      updatePizzaVariationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pizzaVariationService.removePizzaVariation(+id);
  }
}
