export declare class CreateRecipeDto {
    readonly name: string;
    imageUrl?: string;
    readonly description: string;
    readonly salePercent?: number;
    readonly sizes: string[];
    readonly doughTypes: string[];
    readonly ingredients: string[];
}
