import { PartialType } from '@nestjs/swagger';
import { CreatePizzaVariationDto } from './create-pizza-variation.dto';

export class UpdatePizzaVariationDto extends PartialType(
  CreatePizzaVariationDto,
) {}
