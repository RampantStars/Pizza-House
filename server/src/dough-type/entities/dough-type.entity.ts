import { Recipe } from './../../recipe/entities/recipe.entity';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class DoughType {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Традиционное', description: 'Тип теста пиццы' })
  @Column()
  name: string;

  @ApiProperty({
    example: '236',
    description: 'Цена за тип пиццы',
  })
  @Column()
  price: number;

  // @ManyToMany(() => Recipe, (recipe) => recipe.doughtTypes, { cascade: true })
  // @JoinTable()
  // recipes: Recipe[];
}
