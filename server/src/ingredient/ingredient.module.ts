import { MulterModule } from '@nestjs/platform-express';
import { TypeIngredientModule } from './../type-ingredient/type-ingredient.module';
import { TypeIngredient } from './../type-ingredient/entities/type-ingredient.entity';
import { Ingredient } from './entities/ingredient.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IngredientController } from './ingredient.controller';

@Module({
  controllers: [IngredientController],
  providers: [IngredientService],
  imports: [
    TypeOrmModule.forFeature([Ingredient, TypeIngredient]),
    TypeIngredientModule,
  ],
  exports: [IngredientService],
})
export class IngredientModule {}
