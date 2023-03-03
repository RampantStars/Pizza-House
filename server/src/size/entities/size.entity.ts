import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Size {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: '30см', description: 'Размер пиццы' })
  @Column()
  name: string;

  @ApiProperty({
    example: '135',
    description: 'Цена за размер',
  })
  @Column()
  price: number;
}
