import { AdditionalIngredient } from './entities/additional-ingredient.entity';
import { CreateAdditionalIngredientDto } from './dto/create-additional-ingredient.dto';
import { UpdateAdditionalIngredientDto } from './dto/update-additional-ingredient.dto';
import { Repository } from 'typeorm';
export declare class AdditionalIngredientService {
    private readonly additionalIngredientRepository;
    constructor(additionalIngredientRepository: Repository<AdditionalIngredient>);
    createAdditionalIngredient(createAdditionalIngredientDto: CreateAdditionalIngredientDto): Promise<AdditionalIngredient>;
    findAllAdditionalIngredient(): Promise<AdditionalIngredient[]>;
    findOneAdditionalIngredient(id: number): Promise<AdditionalIngredient>;
    updateAdditionalIngredient(id: number, updateAdditionalIngredientDto: UpdateAdditionalIngredientDto): Promise<AdditionalIngredient>;
    removeAdditionalIngredient(id: number): Promise<AdditionalIngredient>;
}
