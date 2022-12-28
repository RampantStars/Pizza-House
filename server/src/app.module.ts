import { Module } from '@nestjs/common/decorators/modules';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'pizzaDb',
      models: [],
      autoLoadModels: true,
    }),
  ],
})
export class AppModule {}
