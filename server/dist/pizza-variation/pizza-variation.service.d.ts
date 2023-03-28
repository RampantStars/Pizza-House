import { AdditionalIngredientService } from './../additional-ingredient/additional-ingredient.service';
import { RecipeService } from './../recipe/recipe.service';
import { DoughTypeService } from './../dough-type/dough-type.service';
import { SizeService } from './../size/size.service';
import { PizzaVariation } from './entities/pizza-variation.entity';
import { CreatePizzaVariationDto } from './dto/create-pizza-variation.dto';
import { UpdatePizzaVariationDto } from './dto/update-pizza-variation.dto';
import { Repository } from 'typeorm';
export declare class PizzaVariationService {
    private readonly pizzaVariationRepository;
    private sizeService;
    private doughtTypeService;
    private recipeService;
    private additionalIngredientService;
    constructor(pizzaVariationRepository: Repository<PizzaVariation>, sizeService: SizeService, doughtTypeService: DoughTypeService, recipeService: RecipeService, additionalIngredientService: AdditionalIngredientService);
    createPizzaVariation(createPizzaVariationDto: CreatePizzaVariationDto): Promise<PizzaVariation>;
    findAllPizzaVariation(): Promise<PizzaVariation[]>;
    findOnePizzaVariation(id: number): Promise<PizzaVariation>;
    updatePizzaVariation(id: number, updatePizzaVariationDto: UpdatePizzaVariationDto): Promise<PizzaVariation>;
    removePizzaVariation(id: number): Promise<PizzaVariation>;
}
