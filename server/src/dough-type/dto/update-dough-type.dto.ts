import { PartialType } from '@nestjs/swagger';
import { CreateDoughTypeDto } from './create-dough-type.dto';

export class UpdateDoughTypeDto extends PartialType(CreateDoughTypeDto) {}
