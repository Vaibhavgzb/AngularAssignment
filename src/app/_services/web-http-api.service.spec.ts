import { TestBed } from '@angular/core/testing';

import { WebHttpApiService } from './web-http-api.service';

describe('WebHttpApiService', () => {
  let service: WebHttpApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebHttpApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
