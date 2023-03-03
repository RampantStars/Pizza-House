"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const dist_1 = require("@nestjs/swagger/dist");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const PORT = process.env.PORT || 3001;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('PizzaHouse')
        .setDescription('Документация по REST API для дипломного проекта')
        .setVersion('1.0')
        .build();
    const document = dist_1.SwaggerModule.createDocument(app, config);
    dist_1.SwaggerModule.setup('/api/docks', app, document);
    await app.listen(PORT, () => console.log(`Server running at ${PORT}`));
}
bootstrap();
//# sourceMappingURL=main.js.map