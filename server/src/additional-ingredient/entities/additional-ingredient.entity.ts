import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class AdditionalIngredient {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'Савойская капуста',
    description: 'Название дополнительного ингредиента',
  })
  @Column()
  name: string;

  @ApiProperty({
    example: 'url',
    description: 'Ссылка на картинку для дополнительного ингредиента',
  })
  @Column()
  imageUrl: string;

  @ApiProperty({
    example: '60',
    description: 'Цена дополнительного ингредиента',
  })
  @Column()
  price: number;

  @ApiProperty({
    example: '15',
    description: 'Вес дополнительного ингредиента',
  })
  @Column()
  weight: number;

  @ApiProperty({
    example: '3',
    description: 'Сколько максимум можно положить дополнительного ингредиента',
  })
  @Column()
  maxCount: number;

  @ApiProperty({
    example: 'true',
    description: 'Есть ли в наличии дополнительного ингредиента',
    required: false,
  })
  @Column({ default: true })
  inStock: boolean;

  // @ManyToOne(
  //   () => PizzaVariation,
  //   (pizzaVariation) => pizzaVariation.additionalIngredients,
  //   { onUpdate: 'CASCADE' },
  // )
  // pizzaVariation: PizzaVariation;
}
