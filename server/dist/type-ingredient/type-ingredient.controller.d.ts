import { TypeIngredient } from './entities/type-ingredient.entity';
import { TypeIngredientService } from './type-ingredient.service';
import { CreateTypeIngredientDto } from './dto/create-type-ingredient.dto';
import { UpdateTypeIngredientDto } from './dto/update-type-ingredient.dto';
export declare class TypeIngredientController {
    private readonly typeIngredientService;
    constructor(typeIngredientService: TypeIngredientService);
    create(createTypeIngredientDto: CreateTypeIngredientDto): Promise<TypeIngredient>;
    findAll(): Promise<TypeIngredient[]>;
    findOne(id: string): Promise<TypeIngredient>;
    update(id: string, updateTypeIngredientDto: UpdateTypeIngredientDto): Promise<TypeIngredient>;
    remove(id: string): Promise<TypeIngredient>;
}
