import { Recipe } from './../../recipe/entities/recipe.entity';
import { TypeIngredient } from './../../type-ingredient/entities/type-ingredient.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinTable,
} from 'typeorm';

@Entity()
export class Ingredient {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Капуста', description: 'Название ингредиента' })
  @Column()
  name: string;
  @ApiProperty({ example: 'url', description: 'Ссылка на изображение' })
  @Column()
  imageUrl: string;

  @ApiProperty({ example: TypeIngredient, description: 'Тип ингредиента' })
  @ManyToOne(
    () => TypeIngredient,
    (typeIngredient) => typeIngredient.ingredients,
  )
  typeIngredient: TypeIngredient;

  // @ManyToMany(() => Recipe, (recipe) => recipe.ingredients, { cascade: true })
  // @JoinTable()
  // recipes: Recipe[];
}
