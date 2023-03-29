import { editFileName, imageFileFilter } from './../utils/file-uploading.utils';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { UseInterceptors, UploadedFile } from '@nestjs/common/decorators';
import { Recipe } from './entities/recipe.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger/dist';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Paginate } from 'nestjs-paginate';
import { PaginateQuery } from 'nestjs-paginate/lib/decorator';
import { Paginated } from 'nestjs-paginate/lib/paginate';
import { IPaginateQuery, queryPaginate } from 'src/utils/paginateQuery';

@ApiTags('Рецепт пиццы')
@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @ApiOperation({ summary: 'Создание пиццы' })
  @ApiResponse({ status: 200, type: Recipe })
  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  create(
    @Body() createRecipeDto: CreateRecipeDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (file) {
      createRecipeDto.imageUrl = file.filename;
    }
    return this.recipeService.createRecipe(createRecipeDto);
  }

  @ApiOperation({ summary: 'Получение всех рецептов пицц' })
  @ApiResponse({ status: 200, type: Recipe })
  @IPaginateQuery(...queryPaginate)
  @Get()
  findAll(@Paginate() query: PaginateQuery): Promise<Paginated<Recipe>> {
    return this.recipeService.findAllRecipe(query);
  }

  @ApiOperation({ summary: 'Получение рецепта пиццы' })
  @ApiResponse({ status: 200, type: Recipe })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipeService.findOneRecipe(+id);
  }

  @ApiOperation({ summary: 'Обновление рецепта пиццы' })
  @ApiResponse({ status: 200, type: Recipe })
  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  update(
    @Param('id') id: string,
    @Body() updateRecipeDto: UpdateRecipeDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (file) {
      updateRecipeDto.imageUrl = file.filename;
    }
    return this.recipeService.updateRecipe(+id, updateRecipeDto);
  }

  @ApiOperation({ summary: 'Удаление рецепта пиццы' })
  @ApiResponse({ status: 200, type: Recipe })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipeService.removeRecipe(+id);
  }
}
