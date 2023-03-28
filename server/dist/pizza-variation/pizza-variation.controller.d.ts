import { PizzaVariationService } from './pizza-variation.service';
import { CreatePizzaVariationDto } from './dto/create-pizza-variation.dto';
import { UpdatePizzaVariationDto } from './dto/update-pizza-variation.dto';
export declare class PizzaVariationController {
    private readonly pizzaVariationService;
    constructor(pizzaVariationService: PizzaVariationService);
    create(createPizzaVariationDto: CreatePizzaVariationDto): Promise<import("./entities/pizza-variation.entity").PizzaVariation>;
    findAll(): Promise<import("./entities/pizza-variation.entity").PizzaVariation[]>;
    findOne(id: string): Promise<import("./entities/pizza-variation.entity").PizzaVariation>;
    update(id: string, updatePizzaVariationDto: UpdatePizzaVariationDto): Promise<import("./entities/pizza-variation.entity").PizzaVariation>;
    remove(id: string): Promise<import("./entities/pizza-variation.entity").PizzaVariation>;
}
