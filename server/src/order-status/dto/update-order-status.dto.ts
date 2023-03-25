import { ApiProperty } from '@nestjs/swagger';
export class UpdateOrderStatusDto {
  @ApiProperty({ example: 'В обработке', description: 'Название статуса' })
  readonly name?: string;
}
