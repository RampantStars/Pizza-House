import { Test, TestingModule } from '@nestjs/testing';
import { TypeIngredientController } from './type-ingredient.controller';
import { TypeIngredientService } from './type-ingredient.service';

describe('TypeIngredientController', () => {
  let controller: TypeIngredientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeIngredientController],
      providers: [TypeIngredientService],
    }).compile();

    controller = module.get<TypeIngredientController>(TypeIngredientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
