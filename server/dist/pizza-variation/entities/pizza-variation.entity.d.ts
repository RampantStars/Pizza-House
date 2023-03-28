import { Recipe } from './../../recipe/entities/recipe.entity';
import { DoughType } from './../../dough-type/entities/dough-type.entity';
import { Size } from './../../size/entities/size.entity';
import { AdditionalIngredient } from './../../additional-ingredient/entities/additional-ingredient.entity';
export declare class PizzaVariation {
    id: number;
    price: number;
    additionalIngredients: AdditionalIngredient[];
    size: Size;
    doughType: DoughType;
    recipe: Recipe;
}
