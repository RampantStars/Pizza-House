import { DoughType } from './../dough-type/entities/dough-type.entity';
import { Size } from './../size/entities/size.entity';
import { Ingredient } from './../ingredient/entities/ingredient.entity';
import { Recipe } from './entities/recipe.entity';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Repository } from 'typeorm';
export declare class RecipeService {
    private readonly ingredientRepository;
    private readonly sizeRepository;
    private readonly doughtTypeRepository;
    private readonly recipeRepository;
    constructor(ingredientRepository: Repository<Ingredient>, sizeRepository: Repository<Size>, doughtTypeRepository: Repository<DoughType>, recipeRepository: Repository<Recipe>);
    createRecipe(createRecipeDto: CreateRecipeDto): Promise<Recipe>;
    findAllRecipe(): Promise<Recipe[]>;
    findOneRecipe(id: number): Promise<Recipe>;
    updateRecipe(id: number, updateRecipeDto: UpdateRecipeDto): Promise<Recipe>;
    removeRecipe(id: number): Promise<Recipe>;
}
