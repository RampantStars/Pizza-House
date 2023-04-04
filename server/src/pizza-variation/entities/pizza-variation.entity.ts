import { Recipe } from './../../recipe/entities/recipe.entity';
import { DoughType } from './../../dough-type/entities/dough-type.entity';
import { Size } from './../../size/entities/size.entity';
import { AdditionalIngredient } from './../../additional-ingredient/entities/additional-ingredient.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
  ManyToMany,
} from 'typeorm';

@Entity()
export class PizzaVariation {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: '640',
    description: 'Стоимость собранной пиццы идентификатор',
  })
  @Column()
  price: number;

  @ApiProperty({
    example: [AdditionalIngredient],
    description: 'Массив дополнительных ингредиентов',
  })
  @ManyToMany(() => AdditionalIngredient, { nullable: true, cascade: true })
  @JoinTable()
  additionalIngredients: AdditionalIngredient[];

  @ApiProperty({
    example: Size,
    description: 'Размер выбранной пиццы',
  })
  @ManyToOne(() => Size, (size) => size.pizzaVariations, {
    onUpdate: 'CASCADE',
  })
  size: Size;

  @ApiProperty({
    example: DoughType,
    description: 'Тип выбранной пиццы',
  })
  @ManyToOne(() => DoughType, (doughType) => doughType.pizzaVariations, {
    onUpdate: 'CASCADE',
  })
  doughType: DoughType;

  @ApiProperty({
    example: Recipe,
    description: 'Рецепт выбранной пиццы',
  })
  @ManyToOne(() => Recipe, (recipe) => recipe.pizzaVariations, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  recipe: Recipe;
}
