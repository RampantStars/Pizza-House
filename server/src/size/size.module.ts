import { Size } from './entities/size.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SizeService } from './size.service';
import { SizeController } from './size.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Size])],
  controllers: [SizeController],
  providers: [SizeService],
  exports: [SizeModule],
})
export class SizeModule {}
