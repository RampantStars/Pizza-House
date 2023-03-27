import { Test, TestingModule } from '@nestjs/testing';
import { AdditionalIngredientController } from './additional-ingredient.controller';
import { AdditionalIngredientService } from './additional-ingredient.service';

describe('AdditionalIngredientController', () => {
  let controller: AdditionalIngredientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdditionalIngredientController],
      providers: [AdditionalIngredientService],
    }).compile();

    controller = module.get<AdditionalIngredientController>(AdditionalIngredientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
