/// <reference types="multer" />
import { Recipe } from './entities/recipe.entity';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
export declare class RecipeController {
    private readonly recipeService;
    constructor(recipeService: RecipeService);
    create(createRecipeDto: CreateRecipeDto, file: Express.Multer.File): Promise<Recipe>;
    findAll(): Promise<Recipe[]>;
    findOne(id: string): Promise<Recipe>;
    update(id: string, updateRecipeDto: UpdateRecipeDto, file: Express.Multer.File): Promise<Recipe>;
    remove(id: string): Promise<Recipe>;
}
