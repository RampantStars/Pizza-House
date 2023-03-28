"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePizzaVariationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_pizza_variation_dto_1 = require("./create-pizza-variation.dto");
class UpdatePizzaVariationDto extends (0, swagger_1.PartialType)(create_pizza_variation_dto_1.CreatePizzaVariationDto) {
}
exports.UpdatePizzaVariationDto = UpdatePizzaVariationDto;
//# sourceMappingURL=update-pizza-variation.dto.js.map