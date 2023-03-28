import { Test, TestingModule } from '@nestjs/testing';
import { PizzaVariationController } from './pizza-variation.controller';
import { PizzaVariationService } from './pizza-variation.service';

describe('PizzaVariationController', () => {
  let controller: PizzaVariationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PizzaVariationController],
      providers: [PizzaVariationService],
    }).compile();

    controller = module.get<PizzaVariationController>(PizzaVariationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
