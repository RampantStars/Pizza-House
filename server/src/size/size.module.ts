import { PizzaVariation } from './../pizza-variation/entities/pizza-variation.entity';
import { Size } from './entities/size.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SizeService } from './size.service';
import { SizeController } from './size.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Size, PizzaVariation])],
  controllers: [SizeController],
  providers: [SizeService],
  exports: [SizeService],
})
export class SizeModule {}
