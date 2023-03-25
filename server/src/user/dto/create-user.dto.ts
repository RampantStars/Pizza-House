import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({ example: 'Rampant', description: 'Логин пользователя' })
  readonly login: string;
  @ApiProperty({ example: 'testPassword', description: 'Пароль пользователя' })
  readonly password: string;
  @ApiProperty({ example: 'test@mail.ru', description: 'Email пользователя' })
  readonly email: string;
  @ApiProperty({
    example: 'ул.Кукушкина д.26',
    description: 'Адрес пользователя',
    required: false,
  })
  readonly address?: string;
}
