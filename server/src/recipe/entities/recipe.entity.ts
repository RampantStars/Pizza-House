import { PizzaVariation } from './../../pizza-variation/entities/pizza-variation.entity';
import { Ingredient } from './../../ingredient/entities/ingredient.entity';
import { DoughType } from './../../dough-type/entities/dough-type.entity';
import { Size } from './../../size/entities/size.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from 'src/category/entities/category.entity';

@Entity()
export class Recipe {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'Пицца 4 перца',
    description: 'Название рецепта пиццы',
  })
  @Column()
  name: string;

  @ApiProperty({
    example: '350',
    description: 'Стоимость рецепта пиццы',
  })
  @Column()
  price: number;

  @ApiProperty({
    example: 'url',
    description: 'Изображение пиццы',
  })
  @Column()
  imageUrl?: string;

  @ApiProperty({
    example: 'Для тех кто любит поострей',
    description: 'Описание пиццы',
  })
  @Column()
  description: string;

  @ApiProperty({
    example: '10',
    description: 'Процент скидки на пиццу пиццы',
  })
  @Column({ nullable: true, default: 0 })
  salePercent: number;

  @ApiProperty({
    example: 'true',
    description: 'Есть ли в наличии дополнительного ингредиента',
    required: false,
  })
  @Column({ default: true })
  inStock: boolean;

  @ApiProperty({
    type: [Size],
    example: Size,
    description: 'Какие размеры будут в данном рецепте у пиццы',
  })
  @ManyToMany(() => Size, { cascade: true })
  @JoinTable()
  sizes: Size[];

  @ApiProperty({
    type: [DoughType],
    example: DoughType,
    description: 'Какие типы теста будут в данном рецепте у пиццы',
  })
  @ManyToMany(() => DoughType, { cascade: true })
  @JoinTable()
  doughtTypes: DoughType[];

  @ManyToMany(() => Category, { cascade: true })
  @JoinTable()
  categories: Category[];

  @ApiProperty({
    type: [Ingredient],
    example: Ingredient,
    description: 'Какие ингредиенты будут в данном рецепте у пиццы',
  })
  @ManyToMany(() => Ingredient, { cascade: true })
  @JoinTable()
  ingredients: Ingredient[];

  @OneToMany(() => PizzaVariation, (pizzaVariation) => pizzaVariation.recipe, {
    nullable: true,
    onUpdate: 'CASCADE',
  })
  pizzaVariations: PizzaVariation[];
}
