import { PartialType } from '@nestjs/swagger';
import { CreateSizeDto } from './create-size.dto';

export class UpdateSizeDto extends PartialType(CreateSizeDto) {
  readonly name?: string;
  readonly price?: number;
}
