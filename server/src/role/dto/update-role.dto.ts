import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  @ApiProperty({ example: 'ADMIN', description: 'Значение роли' })
  readonly value?: string;
  @ApiProperty({ example: 'Администратор', description: 'Описание роли' })
  readonly description?: string;
}
