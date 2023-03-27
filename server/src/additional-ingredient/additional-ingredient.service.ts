import { unlink } from 'fs';
import { AdditionalIngredient } from './entities/additional-ingredient.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAdditionalIngredientDto } from './dto/create-additional-ingredient.dto';
import { UpdateAdditionalIngredientDto } from './dto/update-additional-ingredient.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AdditionalIngredientService {
  constructor(
    @InjectRepository(AdditionalIngredient)
    private readonly additionalIngredientRepository: Repository<AdditionalIngredient>,
  ) {}
  async createAdditionalIngredient(
    createAdditionalIngredientDto: CreateAdditionalIngredientDto,
  ): Promise<AdditionalIngredient> {
    const additionalIngredient =
      await this.additionalIngredientRepository.create(
        createAdditionalIngredientDto,
      );
    return this.additionalIngredientRepository.save(additionalIngredient);
  }

  async findAllAdditionalIngredient(): Promise<AdditionalIngredient[]> {
    const additionalIngredients =
      await this.additionalIngredientRepository.find();
    return additionalIngredients;
  }

  async findOneAdditionalIngredient(id: number): Promise<AdditionalIngredient> {
    const additionalIngredient =
      await this.additionalIngredientRepository.findOne({ where: { id: id } });
    if (!additionalIngredient) {
      throw new NotFoundException(
        `AdditionalIngredient with ID=${id} not found`,
      );
    }
    return additionalIngredient;
  }

  async updateAdditionalIngredient(
    id: number,
    updateAdditionalIngredientDto: UpdateAdditionalIngredientDto,
  ): Promise<AdditionalIngredient> {
    const additionalIngredient =
      await this.additionalIngredientRepository.preload({
        id: id,
        ...updateAdditionalIngredientDto,
      });
    if (!additionalIngredient) {
      throw new NotFoundException(
        `AdditionalIngredient with ID=${id} not found`,
      );
    }
    if (updateAdditionalIngredientDto) {
      unlink(`./uploads/${additionalIngredient.imageUrl}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('file deleted');
      });
    }
    return this.additionalIngredientRepository.save(additionalIngredient);
  }

  async removeAdditionalIngredient(id: number): Promise<AdditionalIngredient> {
    const additionalIngredient =
      await this.additionalIngredientRepository.findOne({ where: { id: id } });
    if (!additionalIngredient) {
      throw new NotFoundException(
        `AdditionalIngredient with ID=${id} not found`,
      );
    }
    unlink(`./uploads/${additionalIngredient.imageUrl}`, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('file deleted');
    });
    return this.additionalIngredientRepository.remove(additionalIngredient);
  }
}
