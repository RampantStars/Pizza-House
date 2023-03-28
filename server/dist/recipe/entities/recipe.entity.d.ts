import { PizzaVariation } from './../../pizza-variation/entities/pizza-variation.entity';
import { Ingredient } from './../../ingredient/entities/ingredient.entity';
import { DoughType } from './../../dough-type/entities/dough-type.entity';
import { Size } from './../../size/entities/size.entity';
export declare class Recipe {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    salePercent: number;
    sizes: Size[];
    doughtTypes: DoughType[];
    ingredients: Ingredient[];
    pizzaVariations: PizzaVariation[];
}
