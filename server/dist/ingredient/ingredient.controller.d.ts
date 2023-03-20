/// <reference types="multer" />
import { IngredientService } from './ingredient.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
export declare class IngredientController {
    private readonly ingredientService;
    constructor(ingredientService: IngredientService);
    create(createIngredientDto: CreateIngredientDto, file: Express.Multer.File): Promise<import("./entities/ingredient.entity").Ingredient>;
    findAll(): Promise<import("./entities/ingredient.entity").Ingredient[]>;
    findOne(id: string): Promise<import("./entities/ingredient.entity").Ingredient>;
    update(id: string, updateIngredientDto: UpdateIngredientDto, image: Express.Multer.File): Promise<import("./entities/ingredient.entity").Ingredient>;
    remove(id: string): Promise<import("./entities/ingredient.entity").Ingredient>;
}