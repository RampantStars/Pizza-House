import { InjectRepository } from '@nestjs/typeorm';
import { Size } from './entities/size.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SizeService {
  constructor(
    @InjectRepository(Size)
    private sizeRepository: Repository<Size>,
  ) {}

  async createSize(createSizeDto: CreateSizeDto): Promise<Size> {
    const size = await this.sizeRepository.create(createSizeDto);
    return this.sizeRepository.save(size);
  }

  async findAllSize(): Promise<Size[]> {
    const sizes = await this.sizeRepository.find();
    const filterSizes = sizes.sort((sizeF, sizeS) =>
      sizeF.name.localeCompare(sizeS.name),
    );
    return filterSizes;
  }

  async findOneSize(id: number): Promise<Size> {
    const size = await this.sizeRepository.findOneBy({ id });
    if (!size) {
      throw new NotFoundException(`Size with ID=${id} not found`);
    }
    return size;
  }

  async updateSize(id: number, updateSizeDto: UpdateSizeDto): Promise<Size> {
    const size = await this.sizeRepository.preload({
      id: id,
      ...updateSizeDto,
    });
    if (!size) {
      throw new NotFoundException(`Size with ID=${id} not found`);
    }
    return this.sizeRepository.save(size);
  }

  async removeSize(id: number): Promise<Size> {
    const size = await this.sizeRepository.findOneBy({ id });
    if (!size) {
      throw new NotFoundException(`Size with ID=${id} not found`);
    }
    return this.sizeRepository.remove(size);
  }
}
