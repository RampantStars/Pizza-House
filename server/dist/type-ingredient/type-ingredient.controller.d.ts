import { TypeIngredientService } from './type-ingredient.service';
import { CreateTypeIngredientDto } from './dto/create-type-ingredient.dto';
import { UpdateTypeIngredientDto } from './dto/update-type-ingredient.dto';
export declare class TypeIngredientController {
    private readonly typeIngredientService;
    constructor(typeIngredientService: TypeIngredientService);
    create(createTypeIngredientDto: CreateTypeIngredientDto): Promise<import("./entities/type-ingredient.entity").TypeIngredient>;
    findAll(): Promise<import("./entities/type-ingredient.entity").TypeIngredient[]>;
    findOne(id: string): Promise<import("./entities/type-ingredient.entity").TypeIngredient>;
    update(id: string, updateTypeIngredientDto: UpdateTypeIngredientDto): Promise<import("./entities/type-ingredient.entity").TypeIngredient>;
    remove(id: string): Promise<import("./entities/type-ingredient.entity").TypeIngredient>;
}
