import { AdditionalIngredientService } from './../additional-ingredient/additional-ingredient.service';
import { RecipeService } from './../recipe/recipe.service';
import { DoughTypeService } from './../dough-type/dough-type.service';
import { SizeService } from './../size/size.service';
import { AdditionalIngredient } from './../additional-ingredient/entities/additional-ingredient.entity';
import { PizzaVariation } from './entities/pizza-variation.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePizzaVariationDto } from './dto/create-pizza-variation.dto';
import { UpdatePizzaVariationDto } from './dto/update-pizza-variation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PizzaVariationService {
  constructor(
    @InjectRepository(PizzaVariation)
    private readonly pizzaVariationRepository: Repository<PizzaVariation>,
    private sizeService: SizeService,
    private doughtTypeService: DoughTypeService,
    private recipeService: RecipeService,
    private additionalIngredientService: AdditionalIngredientService,
  ) {}
  async createPizzaVariation(
    createPizzaVariationDto: CreatePizzaVariationDto,
  ): Promise<PizzaVariation> {
    const additionalIngredients = (await Promise.all(
      createPizzaVariationDto.additionalIngredientsId.map((ingredientNameId) =>
        this.additionalIngredientService.findOneAdditionalIngredient(
          ingredientNameId,
        ),
      ),
    )) as AdditionalIngredient[];

    const doughType = await this.doughtTypeService.findOneDoughType(
      createPizzaVariationDto.doughTypeId,
    );

    const size = await this.sizeService.findOneSize(
      createPizzaVariationDto.sizeId,
    );

    const recipe = await this.recipeService.findOneRecipe(
      createPizzaVariationDto.recipeId,
    );

    const pizzaVariation = await this.pizzaVariationRepository.create({
      ...createPizzaVariationDto,
      additionalIngredients: additionalIngredients,
      doughType: doughType,
      size: size,
      recipe: recipe,
    });
    return this.pizzaVariationRepository.save(pizzaVariation);
  }

  async findAllPizzaVariation(): Promise<PizzaVariation[]> {
    const pizzaVariations = await this.pizzaVariationRepository.find({
      relations: ['recipe', 'doughType', 'size', 'additionalIngredients'],
    });
    return pizzaVariations;
  }

  async findOnePizzaVariation(id: number) {
    const pizzaVariation = await this.pizzaVariationRepository.findOne({
      where: { id: id },
      relations: ['recipe', 'doughType', 'size', 'additionalIngredients'],
    });
    if (!pizzaVariation) {
      throw new NotFoundException(`PizzaVariation with ID=${id} not found`);
    }
    return pizzaVariation;
  }

  async updatePizzaVariation(
    id: number,
    updatePizzaVariationDto: UpdatePizzaVariationDto,
  ): Promise<PizzaVariation> {
    const pizzaVariation = await this.pizzaVariationRepository.preload({
      id: id,
      ...updatePizzaVariationDto,
    });

    if (!pizzaVariation) {
      throw new NotFoundException(`PizzaVariation with ID=${id} not found`);
    }

    if (updatePizzaVariationDto.additionalIngredientsId) {
      const additionalIngredients = (await Promise.all(
        updatePizzaVariationDto.additionalIngredientsId.map(
          (ingredientNameId) =>
            this.additionalIngredientService.findOneAdditionalIngredient(
              ingredientNameId,
            ),
        ),
      )) as AdditionalIngredient[];

      if (!additionalIngredients) {
        throw new NotFoundException(`Ingredient with not found`);
      }
      pizzaVariation.additionalIngredients = [...additionalIngredients];
    }

    if (updatePizzaVariationDto.doughTypeId) {
      const doughType = await this.doughtTypeService.findOneDoughType(
        updatePizzaVariationDto.doughTypeId,
      );

      if (!doughType) {
        throw new NotFoundException(`DoughType with ID=${id} not found`);
      }
      pizzaVariation.doughType = doughType;
    }

    if (updatePizzaVariationDto.sizeId) {
      const size = await this.sizeService.findOneSize(
        updatePizzaVariationDto.sizeId,
      );
      if (!size) {
        throw new NotFoundException(`Size with ID=${id} not found`);
      }
      pizzaVariation.size = size;
    }

    if (updatePizzaVariationDto.recipeId) {
      const recipe = await this.recipeService.findOneRecipe(
        updatePizzaVariationDto.recipeId,
      );
      if (!recipe) {
        throw new NotFoundException(`Recipe with ID=${id} not found`);
      }
      pizzaVariation.recipe = recipe;
    }

    return this.pizzaVariationRepository.save(pizzaVariation);
  }

  async removePizzaVariation(id: number) {
    const pizzaVariation = await this.pizzaVariationRepository.findOneBy({
      id,
    });
    if (!pizzaVariation) {
      throw new NotFoundException(`PizzaVariation with ID=${id} not found`);
    }
    return this.pizzaVariationRepository.remove(pizzaVariation);
  }
}
