import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeIngredient } from './entities/type-ingredient.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTypeIngredientDto } from './dto/create-type-ingredient.dto';
import { UpdateTypeIngredientDto } from './dto/update-type-ingredient.dto';

@Injectable()
export class TypeIngredientService {
  constructor(
    @InjectRepository(TypeIngredient)
    private typeIngredientRepository: Repository<TypeIngredient>,
  ) {}

  async createTypeIngredient(
    createTypeIngredientDto: CreateTypeIngredientDto,
  ): Promise<TypeIngredient> {
    const typeIngredient = await this.typeIngredientRepository.create(
      createTypeIngredientDto,
    );
    return this.typeIngredientRepository.save(typeIngredient);
  }

  async findAllTypeIngredient(): Promise<TypeIngredient[]> {
    const typeIngredients = await this.typeIngredientRepository.find();
    return typeIngredients;
  }

  async findOneTypeIngredient(id: number) {
    const typeIngredient = await this.typeIngredientRepository.findOneBy({
      id,
    });
    if (!typeIngredient) {
      throw new NotFoundException(`TypeIngredient with ID=${id} not found`);
    }
    return typeIngredient;
  }

  async updateTypeIngredient(
    id: number,
    updateTypeIngredientDto: UpdateTypeIngredientDto,
  ) {
    const typeIngredient = await this.typeIngredientRepository.preload({
      id: id,
      ...updateTypeIngredientDto,
    });
    if (!typeIngredient) {
      throw new NotFoundException(`TypeIngredient with ID=${id} not found`);
    }
    return this.typeIngredientRepository.save(typeIngredient);
  }

  async removeTypeIngredient(id: number) {
    const typeIngredient = await this.typeIngredientRepository.findOneBy({
      id,
    });
    if (!typeIngredient) {
      throw new NotFoundException(`TypeIngredient with ID=${id} not found`);
    }
    return this.typeIngredientRepository.remove(typeIngredient);
  }
}
