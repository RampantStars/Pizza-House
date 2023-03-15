import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
export declare class RecipeService {
    create(createRecipeDto: CreateRecipeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRecipeDto: UpdateRecipeDto): string;
    remove(id: number): string;
}
