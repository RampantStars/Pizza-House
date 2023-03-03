import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'Значение роли' })
  @Column()
  value: string;
  @ApiProperty({
    example: 'Администратор сайта',
    description: 'Описание роли',
  })
  @Column()
  description: string;
}
