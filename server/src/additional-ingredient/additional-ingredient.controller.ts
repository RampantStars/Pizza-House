import { AdditionalIngredient } from './entities/additional-ingredient.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { editFileName, imageFileFilter } from 'src/utils/file-uploading.utils';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { UseInterceptors, UploadedFile } from '@nestjs/common/decorators';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdditionalIngredientService } from './additional-ingredient.service';
import { CreateAdditionalIngredientDto } from './dto/create-additional-ingredient.dto';
import { UpdateAdditionalIngredientDto } from './dto/update-additional-ingredient.dto';

@ApiTags('Дополнительный ингредиент')
@Controller('additionalIngredient')
export class AdditionalIngredientController {
  constructor(
    private readonly additionalIngredientService: AdditionalIngredientService,
  ) {}

  @ApiOperation({ summary: 'Добавление дополнительного ингредиента' })
  @ApiResponse({ status: 200, type: AdditionalIngredient })
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
    @Body() createAdditionalIngredientDto: CreateAdditionalIngredientDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    if (image) {
      createAdditionalIngredientDto.imageUrl = image.filename;
    }
    return this.additionalIngredientService.createAdditionalIngredient(
      createAdditionalIngredientDto,
    );
  }

  @ApiOperation({ summary: 'Получение всех дополнительных ингредиентов' })
  @ApiResponse({ status: 200, type: [AdditionalIngredient] })
  @Get()
  findAll() {
    return this.additionalIngredientService.findAllAdditionalIngredient();
  }

  @ApiOperation({ summary: 'Получение дополнительного ингредиента' })
  @ApiResponse({ status: 200, type: AdditionalIngredient })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.additionalIngredientService.findOneAdditionalIngredient(+id);
  }

  @ApiOperation({ summary: 'Изменение дополнительного ингредиента' })
  @ApiResponse({ status: 200, type: AdditionalIngredient })
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
    @Body() updateAdditionalIngredientDto: UpdateAdditionalIngredientDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    if (image) {
      updateAdditionalIngredientDto.imageUrl = image.filename;
    }
    return this.additionalIngredientService.updateAdditionalIngredient(
      +id,
      updateAdditionalIngredientDto,
    );
  }

  @ApiOperation({ summary: 'Удаление дополнительного ингредиента' })
  @ApiResponse({ status: 200, type: AdditionalIngredient })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.additionalIngredientService.removeAdditionalIngredient(+id);
  }
}
