import { PizzaVariation } from './../../pizza-variation/entities/pizza-variation.entity';
import { Recipe } from './../../recipe/entities/recipe.entity';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
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

  @OneToMany(
    () => PizzaVariation,
    (pizzaVariation) => pizzaVariation.doughType,
    {
      onUpdate: 'CASCADE',
    },
  )
  pizzaVariations: PizzaVariation[];
  // @ManyToMany(() => Recipe, (recipe) => recipe.doughtTypes, { cascade: true })
  // @JoinTable()
  // recipes: Recipe[];
}
