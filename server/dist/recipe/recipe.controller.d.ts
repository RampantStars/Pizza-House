import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
export declare class RecipeController {
    private readonly recipeService;
    constructor(recipeService: RecipeService);
    create(createRecipeDto: CreateRecipeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRecipeDto: UpdateRecipeDto): string;
    remove(id: string): string;
}
