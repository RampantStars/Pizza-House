/// <reference types="multer" />
import { AdditionalIngredient } from './entities/additional-ingredient.entity';
import { AdditionalIngredientService } from './additional-ingredient.service';
import { CreateAdditionalIngredientDto } from './dto/create-additional-ingredient.dto';
import { UpdateAdditionalIngredientDto } from './dto/update-additional-ingredient.dto';
export declare class AdditionalIngredientController {
    private readonly additionalIngredientService;
    constructor(additionalIngredientService: AdditionalIngredientService);
    create(createAdditionalIngredientDto: CreateAdditionalIngredientDto, image: Express.Multer.File): Promise<AdditionalIngredient>;
    findAll(): Promise<AdditionalIngredient[]>;
    findOne(id: string): Promise<AdditionalIngredient>;
    update(id: string, updateAdditionalIngredientDto: UpdateAdditionalIngredientDto, image: Express.Multer.File): Promise<AdditionalIngredient>;
    remove(id: string): Promise<AdditionalIngredient>;
}
