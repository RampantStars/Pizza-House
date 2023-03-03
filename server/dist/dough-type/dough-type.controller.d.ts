import { DoughTypeService } from './dough-type.service';
import { CreateDoughTypeDto } from './dto/create-dough-type.dto';
import { UpdateDoughTypeDto } from './dto/update-dough-type.dto';
export declare class DoughTypeController {
    private readonly doughTypeService;
    constructor(doughTypeService: DoughTypeService);
    create(createDoughTypeDto: CreateDoughTypeDto): Promise<import("./entities/dough-type.entity").DoughType>;
    findAll(): Promise<import("./entities/dough-type.entity").DoughType[]>;
    findOne(id: string): Promise<import("./entities/dough-type.entity").DoughType>;
    update(id: string, updateDoughTypeDto: UpdateDoughTypeDto): Promise<import("./entities/dough-type.entity").DoughType>;
    remove(id: string): Promise<import("./entities/dough-type.entity").DoughType>;
}
