import { Test, TestingModule } from '@nestjs/testing';
import { AnimauxController } from './animaux.controller';
import { AnimauxService } from './animaux.service';

describe('AnimauxController', () => {
  let controller: AnimauxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimauxController],
      providers: [AnimauxService],
    }).compile();

    controller = module.get<AnimauxController>(AnimauxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
