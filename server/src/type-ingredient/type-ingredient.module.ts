import { Ingredient } from './../ingredient/entities/ingredient.entity';
import { TypeIngredient } from './entities/type-ingredient.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TypeIngredientService } from './type-ingredient.service';
import { TypeIngredientController } from './type-ingredient.controller';

@Module({
  providers: [TypeIngredientService],
  controllers: [TypeIngredientController],
  imports: [TypeOrmModule.forFeature([TypeIngredient, Ingredient])],
  exports: [TypeIngredientService],
})
export class TypeIngredientModule {}
