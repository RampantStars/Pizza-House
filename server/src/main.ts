import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3001;
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('PizzaHouse')
    .setDescription('Документация по REST API для дипломного проекта')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docks', app, document);

  await app.listen(PORT, () => console.log(`Server running at ${PORT}`));
}
bootstrap();
