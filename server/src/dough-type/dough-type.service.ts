import { DoughType } from './entities/dough-type.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDoughTypeDto } from './dto/create-dough-type.dto';
import { UpdateDoughTypeDto } from './dto/update-dough-type.dto';
import { Repository } from 'typeorm';

@Injectable()
export class DoughTypeService {
  constructor(
    @InjectRepository(DoughType)
    private doughTypeRepository: Repository<DoughType>,
  ) {}

  async createDoughType(
    createDoughTypeDto: CreateDoughTypeDto,
  ): Promise<DoughType> {
    const doughType = await this.doughTypeRepository.create(createDoughTypeDto);
    return this.doughTypeRepository.save(doughType);
  }

  async findAllDoughType(): Promise<DoughType[]> {
    const doughType = await this.doughTypeRepository.find();
    return doughType;
  }

  async findOneDoughType(id: number) {
    const doughType = await this.doughTypeRepository.findOneBy({ id });
    if (!doughType) {
      throw new NotFoundException(`DoughType with ID=${id} not found`);
    }
    return doughType;
  }

  async updateDoughType(id: number, updateDoughTypeDto: UpdateDoughTypeDto) {
    const doughType = await this.doughTypeRepository.preload({
      id: id,
      ...updateDoughTypeDto,
    });
    if (!doughType) {
      throw new NotFoundException(`DoughType with ID=${id} not found`);
    }
    return this.doughTypeRepository.save(doughType);
  }

  async removeDoughType(id: number) {
    const doughType = await this.doughTypeRepository.findOneBy({ id });
    if (!doughType) {
      throw new NotFoundException(`DoughType with ID=${id} not found`);
    }
    return this.doughTypeRepository.remove(doughType);
  }
}
