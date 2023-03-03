import { CreateSizeDto } from './create-size.dto';
declare const UpdateSizeDto_base: import("@nestjs/common").Type<Partial<CreateSizeDto>>;
export declare class UpdateSizeDto extends UpdateSizeDto_base {
    readonly name?: string;
    readonly price?: number;
}
export {};
