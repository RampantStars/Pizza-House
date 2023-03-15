/// <reference types="node" />
interface BufferFile {
    buffer: Buffer;
    originalname: string;
    mimetype: string;
}
export declare class CreateIngredientDto {
    readonly name: string;
    readonly image: BufferFile;
    readonly typeIngredientId: number;
}
export {};
