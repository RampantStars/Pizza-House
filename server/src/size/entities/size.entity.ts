import { Recipe } from './../../recipe/entities/recipe.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  // @ManyToMany(() => Recipe, (recipe) => recipe.sizes, { cascade: true })
  // @JoinTable()
  // recipes: Recipe[];
}
