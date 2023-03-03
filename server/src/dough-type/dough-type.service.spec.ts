import { Test, TestingModule } from '@nestjs/testing';
import { DoughTypeService } from './dough-type.service';

describe('DoughTypeService', () => {
  let service: DoughTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoughTypeService],
    }).compile();

    service = module.get<DoughTypeService>(DoughTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
