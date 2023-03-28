import { Order } from 'src/order/entities/order.entity';
import { PizzaVariation } from './../../pizza-variation/entities/pizza-variation.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class OrderLine {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: '700', description: 'Цена строки заказа' })
  @Column()
  price: number;

  @ApiProperty({
    example: '3',
    description: 'Количество товаров в строке заказа',
  })
  @Column()
  quantity: number;

  @ApiProperty({
    example: PizzaVariation,
    description: 'Какой товар заказан',
  })
  @OneToOne(() => PizzaVariation)
  @JoinColumn()
  pizzaVariation: PizzaVariation;

  @ManyToOne(() => Order, (order) => order.orderLines)
  order: Order;
}
