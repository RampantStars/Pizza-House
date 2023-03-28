import { ApiProperty } from '@nestjs/swagger';
import { PizzaVariation } from './../../pizza-variation/entities/pizza-variation.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

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

  @OneToMany(() => PizzaVariation, (pizzaVariation) => pizzaVariation.size, {
    onUpdate: 'CASCADE',
  })
  pizzaVariations: PizzaVariation[];

  // @ManyToMany(() => Recipe, (recipe) => recipe.sizes, { cascade: true })
  // @JoinTable()
  // recipes: Recipe[];
}
