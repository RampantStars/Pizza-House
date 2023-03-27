import { AdditionalIngredient } from './entities/additional-ingredient.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AdditionalIngredientService } from './additional-ingredient.service';
import { AdditionalIngredientController } from './additional-ingredient.controller';

@Module({
  controllers: [AdditionalIngredientController],
  providers: [AdditionalIngredientService],
  imports: [TypeOrmModule.forFeature([AdditionalIngredient])],
  exports: [AdditionalIngredientService],
})
export class AdditionalIngredientModule {}
