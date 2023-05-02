import { PaginateQuery } from 'nestjs-paginate/lib/decorator';
import {
  FilterOperator,
  FilterSuffix,
  paginate,
  Paginated,
} from 'nestjs-paginate/lib/paginate';
import { unlink } from 'fs';
import { DoughType } from './../dough-type/entities/dough-type.entity';
import { Size } from './../size/entities/size.entity';
import { Ingredient } from './../ingredient/entities/ingredient.entity';
import { Recipe } from './entities/recipe.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Repository } from 'typeorm';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<Ingredient>,
    @InjectRepository(Size)
    private readonly sizeRepository: Repository<Size>,
    @InjectRepository(DoughType)
    private readonly doughtTypeRepository: Repository<DoughType>,
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async createRecipe(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const ingredients = (await Promise.all(
      createRecipeDto.ingredients.map((ingredientName) =>
        this.ingredientRepository.findOne({ where: { name: ingredientName } }),
      ),
    )) as Ingredient[];

    const sizes = (await Promise.all(
      createRecipeDto.sizes.map((sizeName) =>
        this.sizeRepository.findOne({ where: { name: sizeName } }),
      ),
    )) as Size[];

    const categories = (await Promise.all(
      createRecipeDto.categories.map((categoryName) =>
        this.categoryRepository.findOne({ where: { name: categoryName } }),
      ),
    )) as Category[];

    const doughtTypes = (await Promise.all(
      createRecipeDto.doughTypes.map((doughtTypeName) =>
        this.doughtTypeRepository.findOne({ where: { name: doughtTypeName } }),
      ),
    )) as DoughType[];

    if (!ingredients || !sizes || !doughtTypes || !categories) {
      throw new NotFoundException(`Ошибка в поиске`);
    }
    const recipe = this.recipeRepository.create({
      price: createRecipeDto.price,
      name: createRecipeDto.name,
      description: createRecipeDto.description,
      imageUrl: createRecipeDto.imageUrl,
      salePercent: createRecipeDto.salePercent,
    });

    recipe.ingredients = [...ingredients];
    recipe.sizes = [...sizes];
    recipe.doughtTypes = [...doughtTypes];
    recipe.categories = [...categories];

    return this.recipeRepository.save(recipe);
  }

  async findAllRecipe(query: PaginateQuery): Promise<Paginated<Recipe>> {
    // const recipes = await this.recipeRepository.find({
    //   relations: { ingredients: true, doughtTypes: true, sizes: true },
    // });
    const recipes = await paginate(query, this.recipeRepository, {
      relations: ['ingredients', 'doughtTypes', 'sizes', 'categories'],
      sortableColumns: ['id', 'name', 'price'],
      nullSort: 'last',
      defaultSortBy: [['id', 'ASC']],
      searchableColumns: ['name'],
      filterableColumns: {
        name: [FilterOperator.EQ, FilterSuffix.NOT],
        categories: [FilterOperator.EQ, FilterSuffix.NOT],
      },
    });
    return recipes;
  }

  async findOneRecipe(id: number): Promise<Recipe> {
    const recipe = await this.recipeRepository.findOne({
      where: { id: id },
      relations: { ingredients: true, doughtTypes: true, sizes: true },
    });
    if (!recipe) {
      throw new NotFoundException(`Recipe with ID=${id} not found`);
    }
    return recipe;
  }

  async updateRecipe(
    id: number,
    updateRecipeDto: UpdateRecipeDto,
  ): Promise<Recipe> {
    const recipe = await this.recipeRepository.preload({
      id: id,
      name: updateRecipeDto.name,
      description: updateRecipeDto.description,
      imageUrl: updateRecipeDto.imageUrl,
      salePercent: updateRecipeDto.salePercent,
    });

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID=${id} not found`);
    }

    if (updateRecipeDto.ingredients) {
      const ingredients = (await Promise.all(
        updateRecipeDto.ingredients.map((ingredientName) =>
          this.ingredientRepository.findOne({
            where: { name: ingredientName },
          }),
        ),
      )) as Ingredient[];

      if (!ingredients) {
        throw new NotFoundException(`Ingredient with not found`);
      }

      recipe.ingredients = [...ingredients];
    }

    if (updateRecipeDto.sizes) {
      const sizes = (await Promise.all(
        updateRecipeDto.sizes.map((sizeName) =>
          this.sizeRepository.findOne({ where: { name: sizeName } }),
        ),
      )) as Size[];
      if (!sizes) {
        throw new NotFoundException(`Ingredient with not found`);
      }

      recipe.sizes = [...sizes];
    }

    if (updateRecipeDto.doughTypes) {
      const doughtTypes = (await Promise.all(
        updateRecipeDto.doughTypes.map((doughtTypeName) =>
          this.doughtTypeRepository.findOne({
            where: { name: doughtTypeName },
          }),
        ),
      )) as DoughType[];

      if (!doughtTypes) {
        throw new NotFoundException(`Ingredient with not found`);
      }

      recipe.doughtTypes = [...doughtTypes];
    }

    if (updateRecipeDto.imageUrl) {
      unlink(`./uploads/${recipe.imageUrl}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('file deleted');
      });
    }
    return this.recipeRepository.save(recipe);
  }

  async removeRecipe(id: number): Promise<Recipe> {
    const recipe = await this.recipeRepository.findOneBy({ id });
    if (!recipe) {
      throw new NotFoundException(`Recipe with ID=${id} not found`);
    }
    unlink(`./uploads/${recipe.imageUrl}`, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('file deleted');
    });
    return this.recipeRepository.remove(recipe);
  }
}
