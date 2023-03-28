import { ApiProperty } from '@nestjs/swagger';
import { Order } from 'src/order/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderStatus {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'В обработке', description: 'Значение статуса' })
  @Column()
  name: string;

  @OneToMany(() => Order, (order) => order.orderStatus)
  order: Order[];
}
