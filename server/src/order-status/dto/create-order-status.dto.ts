import { ApiProperty } from '@nestjs/swagger';
export class CreateOrderStatusDto {
  @ApiProperty({ example: 'В пути', description: 'Название статуса' })
  readonly name: string;
}
