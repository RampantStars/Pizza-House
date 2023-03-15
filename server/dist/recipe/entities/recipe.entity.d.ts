import { DoughType } from './../../dough-type/entities/dough-type.entity';
import { Size } from './../../size/entities/size.entity';
export declare class Recipe {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    salePercent: number;
    sizes: Size[];
    doughTypes: DoughType[];
    userRecipe: boolean;
}
