import { Order } from 'src/order/entities/order.entity';
import { RoleModule } from './../role/role.module';
import { User } from './entities/user.entity';
import { Role } from './../role/entities/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([User, Role, Order]), RoleModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
