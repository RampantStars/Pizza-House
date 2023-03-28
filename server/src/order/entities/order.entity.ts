import { OrderLine } from './../../order-line/entities/order-line.entity';
import { OrderStatus } from './../../order-status/entities/order-status.entity';
import { User } from './../../user/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 1200, description: 'Общая цена заказа' })
  @Column()
  price: number;

  @ApiProperty({ example: Date, description: 'Дата заказа' })
  @CreateDateColumn({ type: 'timestamp' })
  date: Date;

  @ApiProperty({
    example: 'Иваново, ул. Парижской Коммуны д.56А',
    description: 'Адрес заказа',
  })
  @Column()
  address: string;

  @ApiProperty({
    example: 5,
    description: 'Количество товаров в заказе',
  })
  @Column()
  quantityItem: number;

  @ApiProperty({
    example: 'Без горчицы',
    description: 'Комментарий к заказу',
    nullable: true,
  })
  @Column()
  comment: string;

  @ApiProperty({
    example: User,
    description: 'Пользователь сделавший заказ',
    nullable: true,
  })
  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @ApiProperty({
    example: OrderStatus,
    description: 'Статус заказа',
    nullable: true,
  })
  @ManyToOne(() => OrderStatus, (orderStatus) => orderStatus.order)
  orderStatus: OrderStatus;

  @ApiProperty({
    example: [OrderLine],
    description: 'Строчки заказа',
    nullable: true,
  })
  @OneToMany(() => OrderLine, (orderLine) => orderLine.order)
  orderLines: OrderLine[];
}
