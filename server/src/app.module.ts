import { Recipe } from './recipe/entities/recipe.entity';
import { MulterModule } from '@nestjs/platform-express';
import { Ingredient } from './ingredient/entities/ingredient.entity';
import { TypeIngredient } from './type-ingredient/entities/type-ingredient.entity';
import { DoughType } from './dough-type/entities/dough-type.entity';
import { Size } from './size/entities/size.entity';
import { RoleModule } from './role/role.module';
import { Role } from './role/entities/role.entity';
import { Module } from '@nestjs/common/decorators/modules';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SizeModule } from './size/size.module';
import { DoughTypeModule } from './dough-type/dough-type.module';
import { TypeIngredientModule } from './type-ingredient/type-ingredient.module';
import { RecipeModule } from './recipe/recipe.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
    MulterModule.register({ dest: './uploads' }),
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
      entities: [Role, Size, DoughType, TypeIngredient, Ingredient, Recipe],
      synchronize: true,
    }),
    RoleModule,
    SizeModule,
    DoughTypeModule,
    TypeIngredientModule,
    RecipeModule,
    IngredientModule,
  ],
})
export class AppModule {}
