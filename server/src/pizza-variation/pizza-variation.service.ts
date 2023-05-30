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
    const doughType = await this.doughtTypeService.findOneDoughType(
      createPizzaVariationDto.doughType.id,
    );

    const size = await this.sizeService.findOneSize(
      createPizzaVariationDto.size.id,
    );

    const recipe = await this.recipeService.findOneRecipe(
      createPizzaVariationDto.recipe.id,
    );
    const price = recipe.price + doughType.price + size.price;

    const pizzaVariation = await this.pizzaVariationRepository.create({
      ...createPizzaVariationDto,
      doughType: doughType,
      price: price,
      size: size,
      recipe: recipe,
    });

    if (createPizzaVariationDto.additionalIngredients) {
      const additionalIngredients = (await Promise.all(
        createPizzaVariationDto.additionalIngredients.map((ingredient) =>
          this.additionalIngredientService.findOneAdditionalIngredient(
            ingredient.id,
          ),
        ),
      )) as AdditionalIngredient[];
      pizzaVariation.additionalIngredients = [...additionalIngredients];
      const priceAdd = additionalIngredients.reduce(
        (acc, y) => acc + y.price,
        price,
      );
      pizzaVariation.price = priceAdd;
    }
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

    if (updatePizzaVariationDto.additionalIngredients) {
      const additionalIngredients = (await Promise.all(
        updatePizzaVariationDto.additionalIngredients.map((ingredient) =>
          this.additionalIngredientService.findOneAdditionalIngredient(
            ingredient.id,
          ),
        ),
      )) as AdditionalIngredient[];

      if (!additionalIngredients) {
        throw new NotFoundException(`Ingredient with not found`);
      }
      pizzaVariation.additionalIngredients = [...additionalIngredients];
    }

    if (updatePizzaVariationDto.doughType) {
      const doughType = await this.doughtTypeService.findOneDoughType(
        updatePizzaVariationDto.doughType.id,
      );

      if (!doughType) {
        throw new NotFoundException(`DoughType with ID=${id} not found`);
      }
      pizzaVariation.doughType = doughType;
    }

    if (updatePizzaVariationDto.size) {
      const size = await this.sizeService.findOneSize(
        updatePizzaVariationDto.size.id,
      );
      if (!size) {
        throw new NotFoundException(`Size with ID=${id} not found`);
      }
      pizzaVariation.size = size;
    }

    if (updatePizzaVariationDto.recipe) {
      const recipe = await this.recipeService.findOneRecipe(
        updatePizzaVariationDto.recipe.id,
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
