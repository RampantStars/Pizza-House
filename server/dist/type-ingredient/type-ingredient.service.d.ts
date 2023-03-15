import { Repository } from 'typeorm';
import { TypeIngredient } from './entities/type-ingredient.entity';
import { CreateTypeIngredientDto } from './dto/create-type-ingredient.dto';
import { UpdateTypeIngredientDto } from './dto/update-type-ingredient.dto';
export declare class TypeIngredientService {
    private typeIngredientRepository;
    constructor(typeIngredientRepository: Repository<TypeIngredient>);
    createTypeIngredient(createTypeIngredientDto: CreateTypeIngredientDto): Promise<TypeIngredient>;
    findAllTypeIngredient(): Promise<TypeIngredient[]>;
    findOneTypeIngredient(id: number): Promise<TypeIngredient>;
    updateTypeIngredient(id: number, updateTypeIngredientDto: UpdateTypeIngredientDto): Promise<TypeIngredient>;
    removeTypeIngredient(id: number): Promise<TypeIngredient>;
}
