/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
export class UserRoleDto {
  @ApiProperty({ example: '1', description: 'Id пользователя' })
  readonly userId: number;
  @ApiProperty({ example: '1', description: 'Id роли' })
  readonly roleId: number;
}
