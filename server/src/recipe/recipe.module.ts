import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './entities/recipe.entity';
import { DoughType } from './../dough-type/entities/dough-type.entity';
import { Ingredient } from './../ingredient/entities/ingredient.entity';
import { Size } from './../size/entities/size.entity';
import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { AuthModule } from 'src/auth/auth.module';
import { Category } from 'src/category/entities/category.entity';

@Module({
  controllers: [RecipeController],
  providers: [RecipeService],
  imports: [
    TypeOrmModule.forFeature([Recipe, Size, Ingredient, DoughType, Category]),
    AuthModule,
  ],
  exports: [RecipeService],
})
export class RecipeModule {}
