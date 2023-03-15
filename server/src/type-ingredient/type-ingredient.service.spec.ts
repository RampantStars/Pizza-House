import { Test, TestingModule } from '@nestjs/testing';
import { TypeIngredientService } from './type-ingredient.service';

describe('TypeIngredientService', () => {
  let service: TypeIngredientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeIngredientService],
    }).compile();

    service = module.get<TypeIngredientService>(TypeIngredientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
