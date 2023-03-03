"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const dough_type_entity_1 = require("./dough-type/entities/dough-type.entity");
const size_entity_1 = require("./size/entities/size.entity");
const role_module_1 = require("./role/role.module");
const role_entity_1 = require("./role/entities/role.entity");
const modules_1 = require("@nestjs/common/decorators/modules");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const size_module_1 = require("./size/size.module");
const dough_type_module_1 = require("./dough-type/dough-type.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, modules_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                entities: [role_entity_1.Role, size_entity_1.Size, dough_type_entity_1.DoughType],
                synchronize: true,
            }),
            role_module_1.RoleModule,
            size_module_1.SizeModule,
            dough_type_module_1.DoughTypeModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map