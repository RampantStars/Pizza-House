import { PartialType } from '@nestjs/swagger';
import { CreateTypeIngredientDto } from './create-type-ingredient.dto';

export class UpdateTypeIngredientDto {
  readonly name?: string;
}
