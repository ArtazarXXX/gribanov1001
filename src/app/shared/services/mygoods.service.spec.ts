import { TestBed } from '@angular/core/testing';

import { MygoodsService } from "./mygoods.service";

describe('MygoodsService', () => {
  let service: MygoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MygoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
