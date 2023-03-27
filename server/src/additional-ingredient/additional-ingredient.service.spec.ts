import { Test, TestingModule } from '@nestjs/testing';
import { AdditionalIngredientService } from './additional-ingredient.service';

describe('AdditionalIngredientService', () => {
  let service: AdditionalIngredientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdditionalIngredientService],
    }).compile();

    service = module.get<AdditionalIngredientService>(AdditionalIngredientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
