import { RecipeModule } from './../recipe/recipe.module';
import { DoughTypeModule } from './../dough-type/dough-type.module';
import { SizeModule } from './../size/size.module';
import { AdditionalIngredientModule } from './../additional-ingredient/additional-ingredient.module';
import { DoughType } from './../dough-type/entities/dough-type.entity';
import { Size } from './../size/entities/size.entity';
import { AdditionalIngredient } from './../additional-ingredient/entities/additional-ingredient.entity';
import { PizzaVariation } from './entities/pizza-variation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PizzaVariationService } from './pizza-variation.service';
import { PizzaVariationController } from './pizza-variation.controller';

@Module({
  controllers: [PizzaVariationController],
  providers: [PizzaVariationService],
  imports: [
    TypeOrmModule.forFeature([
      PizzaVariation,
      AdditionalIngredient,
      Size,
      DoughType,
    ]),
    AdditionalIngredientModule,
    SizeModule,
    DoughTypeModule,
    RecipeModule,
  ],
  exports: [PizzaVariationService],
})
export class PizzaVariationModule {}
