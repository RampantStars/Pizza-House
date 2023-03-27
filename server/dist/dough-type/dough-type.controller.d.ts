import { DoughType } from './entities/dough-type.entity';
import { DoughTypeService } from './dough-type.service';
import { CreateDoughTypeDto } from './dto/create-dough-type.dto';
import { UpdateDoughTypeDto } from './dto/update-dough-type.dto';
export declare class DoughTypeController {
    private readonly doughTypeService;
    constructor(doughTypeService: DoughTypeService);
    create(createDoughTypeDto: CreateDoughTypeDto): Promise<DoughType>;
    findAll(): Promise<DoughType[]>;
    findOne(id: string): Promise<DoughType>;
    update(id: string, updateDoughTypeDto: UpdateDoughTypeDto): Promise<DoughType>;
    remove(id: string): Promise<DoughType>;
}
