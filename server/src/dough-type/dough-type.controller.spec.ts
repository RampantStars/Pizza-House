import { Test, TestingModule } from '@nestjs/testing';
import { DoughTypeController } from './dough-type.controller';
import { DoughTypeService } from './dough-type.service';

describe('DoughTypeController', () => {
  let controller: DoughTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoughTypeController],
      providers: [DoughTypeService],
    }).compile();

    controller = module.get<DoughTypeController>(DoughTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
