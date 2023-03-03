import { DoughType } from './dough-type/entities/dough-type.entity';
import { Size } from './size/entities/size.entity';
import { RoleModule } from './role/role.module';
import { Role } from './role/entities/role.entity';
import { Module } from '@nestjs/common/decorators/modules';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SizeModule } from './size/size.module';
import { DoughTypeModule } from './dough-type/dough-type.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Role, Size, DoughType],
      synchronize: true,
    }),
    RoleModule,
    SizeModule,
    DoughTypeModule,
  ],
})
export class AppModule {}
