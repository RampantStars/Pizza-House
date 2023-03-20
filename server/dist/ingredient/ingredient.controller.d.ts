/// <reference types="multer" />
import { Ingredient } from './entities/ingredient.entity';
import { IngredientService } from './ingredient.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
export declare class IngredientController {
    private readonly ingredientService;
    constructor(ingredientService: IngredientService);
    create(createIngredientDto: CreateIngredientDto, file: Express.Multer.File): Promise<Ingredient>;
    findAll(): Promise<Ingredient[]>;
    findOne(id: string): Promise<Ingredient>;
    update(id: string, updateIngredientDto: UpdateIngredientDto, image: Express.Multer.File): Promise<Ingredient>;
    remove(id: string): Promise<Ingredient>;
}
