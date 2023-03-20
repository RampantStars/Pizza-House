import { Ingredient } from './entities/ingredient.entity';
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
import { IngredientService } from './ingredient.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'src/utils/file-uploading.utils';

@ApiTags('Ингредиенты')
@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @ApiOperation({ summary: 'Добавление ингредиента' })
  @ApiResponse({ status: 200, type: Ingredient })
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
    @Body() createIngredientDto: CreateIngredientDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (file) {
      createIngredientDto.imageUrl = file.filename;
    }
    return this.ingredientService.createIngredient(createIngredientDto);
  }

  @ApiOperation({ summary: 'Получение всех ингредиентов' })
  @ApiResponse({ status: 200, type: [Ingredient] })
  @Get()
  findAll() {
    return this.ingredientService.findAllIngredients();
  }

  @ApiOperation({ summary: 'Получение ингредиента' })
  @ApiResponse({ status: 200, type: Ingredient })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientService.findOneIngredient(+id);
  }

  @ApiOperation({ summary: 'Изменение ингредиента' })
  @ApiResponse({ status: 200, type: Ingredient })
  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/ingredient',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  update(
    @Param('id') id: string,
    @Body() updateIngredientDto: UpdateIngredientDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return this.ingredientService.updateIngredient(
      +id,
      updateIngredientDto,
      image,
    );
  }
  @ApiOperation({ summary: 'Удаление ингредиента' })
  @ApiResponse({ status: 200, type: [Ingredient] })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientService.removeIngredient(+id);
  }
}
