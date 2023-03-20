/// <reference types="multer" />
import { TypeIngredientService } from './../type-ingredient/type-ingredient.service';
import { Ingredient } from './entities/ingredient.entity';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Repository } from 'typeorm';
export declare class IngredientService {
    private ingredientRepository;
    private typeIngredientService;
    constructor(ingredientRepository: Repository<Ingredient>, typeIngredientService: TypeIngredientService);
    createIngredient(createIngredientDto: CreateIngredientDto): Promise<Ingredient>;
    findAllIngredients(): Promise<Ingredient[]>;
    findOneIngredient(id: number): Promise<Ingredient>;
    updateIngredient(id: number, updateIngredientDto: UpdateIngredientDto, image: Express.Multer.File): Promise<Ingredient>;
    removeIngredient(id: number): Promise<Ingredient>;
}
