import { Role } from './../../role/entities/role.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class User {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Rampant', description: 'Логин пользователя' })
  @Column()
  login: string;

  @ApiProperty({ example: 'testPassword', description: 'Пароль пользователя' })
  @Column()
  password: string;

  @ApiProperty({
    example: 'testmail@mail.ru',
    description: 'Email пользователя',
  })
  @Column()
  email: string;
  @ApiProperty({
    example: 'testmail@mail.ru',
    description: 'Email пользователя',
  })
  @Column({ nullable: true })
  address: string;

  @ApiProperty({
    type: [Role],
    example: Role,
    description: 'Какие роли у данного пользователя',
  })
  @ManyToMany(() => Role, { cascade: true })
  @JoinTable()
  roles: Role[];
}
