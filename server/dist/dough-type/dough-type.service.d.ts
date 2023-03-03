import { DoughType } from './entities/dough-type.entity';
import { CreateDoughTypeDto } from './dto/create-dough-type.dto';
import { UpdateDoughTypeDto } from './dto/update-dough-type.dto';
import { Repository } from 'typeorm';
export declare class DoughTypeService {
    private doughTypeRepository;
    constructor(doughTypeRepository: Repository<DoughType>);
    createDoughType(createDoughTypeDto: CreateDoughTypeDto): Promise<DoughType>;
    findAllDoughType(): Promise<DoughType[]>;
    findOneDoughType(id: number): Promise<DoughType>;
    updateDoughType(id: number, updateDoughTypeDto: UpdateDoughTypeDto): Promise<DoughType>;
    removeDoughType(id: number): Promise<DoughType>;
}
