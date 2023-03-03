import { CreateRoleDto } from './create-role.dto';
declare const UpdateRoleDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateRoleDto>>;
export declare class UpdateRoleDto extends UpdateRoleDto_base {
    readonly id?: number;
    readonly value?: string;
    readonly description?: string;
}
export {};