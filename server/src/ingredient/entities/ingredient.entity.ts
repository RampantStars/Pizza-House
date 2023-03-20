import { TypeIngredient } from './../../type-ingredient/entities/type-ingredient.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ingredient {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  imageUrl: string;

  @ManyToOne(
    () => TypeIngredient,
    (typeIngredient) => typeIngredient.ingredients,
    { cascade: ['remove'] },
  )
  typeIngredient: TypeIngredient;
}
