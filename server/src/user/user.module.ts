import { Order } from 'src/order/entities/order.entity';
import { RoleModule } from './../role/role.module';
import { User } from './entities/user.entity';
import { Role } from './../role/entities/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([User, Role, Order]),
    RoleModule,
  ],
  exports: [UserService],
})
export class UserModule {}
