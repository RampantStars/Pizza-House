import { Ingredient } from './../../ingredient/entities/ingredient.entity';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class TypeIngredient {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Соус', description: 'Название категории' })
  @Column()
  name: string;

  @OneToMany(() => Ingredient, (ingredient) => ingredient.typeIngredient, {
    cascade: true,
  })
  ingredients: Ingredient[];
}
