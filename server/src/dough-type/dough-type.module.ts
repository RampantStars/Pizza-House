import { PizzaVariation } from './../pizza-variation/entities/pizza-variation.entity';
import { DoughType } from './entities/dough-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DoughTypeService } from './dough-type.service';
import { DoughTypeController } from './dough-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DoughType, PizzaVariation])],
  controllers: [DoughTypeController],
  providers: [DoughTypeService],
  exports: [DoughTypeService],
})
export class DoughTypeModule {}
