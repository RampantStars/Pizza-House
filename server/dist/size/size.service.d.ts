import { Size } from './entities/size.entity';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { Repository } from 'typeorm';
export declare class SizeService {
    private sizeRepository;
    constructor(sizeRepository: Repository<Size>);
    createSize(createSizeDto: CreateSizeDto): Promise<Size>;
    findAllSize(): Promise<Size[]>;
    findOneSize(id: number): Promise<Size>;
    updateSize(id: number, updateSizeDto: UpdateSizeDto): Promise<Size>;
    removeSize(id: number): Promise<Size>;
}
