import { Order } from 'src/order/entities/order.entity';
import { OrderLine } from './order-line/entities/order-line.entity';
import { PizzaVariation } from './pizza-variation/entities/pizza-variation.entity';
import { AdditionalIngredient } from './additional-ingredient/entities/additional-ingredient.entity';
import { User } from './user/entities/user.entity';
import { OrderStatus } from './order-status/entities/order-status.entity';
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
import { OrderStatusModule } from './order-status/order-status.module';
import { UserModule } from './user/user.module';
import { AdditionalIngredientModule } from './additional-ingredient/additional-ingredient.module';
import { PizzaVariationModule } from './pizza-variation/pizza-variation.module';
import { OrderLineModule } from './order-line/order-line.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entities/category.entity';

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
      schema: 'public',
      entities: [
        Role,
        Size,
        DoughType,
        TypeIngredient,
        Ingredient,
        Recipe,
        OrderStatus,
        User,
        AdditionalIngredient,
        PizzaVariation,
        OrderLine,
        Order,
        Category,
      ],
      synchronize: true,
    }),
    RoleModule,
    SizeModule,
    DoughTypeModule,
    TypeIngredientModule,
    RecipeModule,
    IngredientModule,
    OrderStatusModule,
    UserModule,
    AdditionalIngredientModule,
    PizzaVariationModule,
    OrderLineModule,
    OrderModule,
    AuthModule,
    CategoryModule,
  ],
})
export class AppModule {}
