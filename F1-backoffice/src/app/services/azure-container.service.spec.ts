import { TestBed } from '@angular/core/testing';

import { AzureContainerService } from './azure-container.service';

describe('AzureContainerService', () => {
  let service: AzureContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzureContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
