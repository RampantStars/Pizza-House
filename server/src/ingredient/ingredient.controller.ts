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

@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

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
    return this.ingredientService.createIngredient(createIngredientDto, file);
  }

  @Get()
  findAll() {
    return this.ingredientService.findAllIngredients();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientService.findOneIngredient(+id);
  }

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
    @Body() updateIngredientDto: UpdateIngredientDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return this.ingredientService.updateIngredient(
      +id,
      updateIngredientDto,
      image,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientService.removeIngredient(+id);
  }
}
