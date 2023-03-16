import { TypeIngredientService } from './../type-ingredient/type-ingredient.service';
import { Ingredient } from './entities/ingredient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Repository } from 'typeorm';
import { unlink } from 'fs';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
    private typeIngredientService: TypeIngredientService,
  ) {}

  async createIngredient(
    createIngredientDto: CreateIngredientDto,
    image: Express.Multer.File,
  ) {
    const type = await this.typeIngredientService.findOneTypeIngredient(
      createIngredientDto.typeIngredientId,
    );
    if (!type) {
      throw new NotFoundException(`Ingredient with not found`);
    }

    const ingredient = this.ingredientRepository.create({
      ...createIngredientDto,
      imageUrl: image.filename,
      typeIngredient: type,
    });
    return this.ingredientRepository.save(ingredient);
  }

  async findAllIngredients() {
    const ingredients = await this.ingredientRepository.find({
      relations: { typeIngredient: true },
    });
    return ingredients;
  }

  async findOneIngredient(id: number) {
    const ingredient = await this.ingredientRepository.findOne({
      where: { id: id },
      relations: { typeIngredient: true },
    });
    if (!ingredient) {
      throw new NotFoundException(`Ingredient with ID=${id} not found`);
    }
    return ingredient;
  }

  async updateIngredient(
    id: number,
    updateIngredientDto: UpdateIngredientDto,
    image: Express.Multer.File,
  ) {
    const ingredient = await this.ingredientRepository.preload({
      id: id,
      ...updateIngredientDto,
    });

    if (!ingredient) {
      throw new NotFoundException(`Ingredient with ID=${id} not found`);
    }

    if (updateIngredientDto.typeIngredientId) {
      const type = await this.typeIngredientService.findOneTypeIngredient(
        updateIngredientDto.typeIngredientId,
      );
      if (!type) {
        throw new NotFoundException(`Ingredient with not found`);
      }
      ingredient.typeIngredient = type;
    }
    if (image) {
      unlink(`./uploads/${ingredient.imageUrl}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('file deleted');
      });
      ingredient.imageUrl = image.filename;
    }

    return this.ingredientRepository.save(ingredient);
  }

  async removeIngredient(id: number) {
    const ingredient = await this.ingredientRepository.findOneBy({ id });
    if (!ingredient) {
      throw new NotFoundException(`Ingredient with ID=${id} not found`);
    }
    return this.ingredientRepository.remove(ingredient);
  }
}
