import { ApiProperty } from '@nestjs/swagger';
export class LoginUserDto {
  @ApiProperty({ example: 'testPassword', description: 'Пароль пользователя' })
  readonly password: string;
  @ApiProperty({ example: 'test@mail.ru', description: 'Email пользователя' })
  readonly email: string;
}
