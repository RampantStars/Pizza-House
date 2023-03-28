import { Test, TestingModule } from '@nestjs/testing';
import { PizzaVariationService } from './pizza-variation.service';

describe('PizzaVariationService', () => {
  let service: PizzaVariationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PizzaVariationService],
    }).compile();

    service = module.get<PizzaVariationService>(PizzaVariationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
