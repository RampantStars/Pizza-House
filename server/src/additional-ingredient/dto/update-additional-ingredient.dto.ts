/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { CreateAdditionalIngredientDto } from './create-additional-ingredient.dto';

export class UpdateAdditionalIngredientDto extends PartialType(
  CreateAdditionalIngredientDto,
) {}
