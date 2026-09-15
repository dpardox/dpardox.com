import { TestBed } from '@angular/core/testing';

import { firstValueFrom } from 'rxjs';

import { NetworkService } from './network-service';

describe('NetworkService', () => {
  let service: NetworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should provide the public networks without an HTTP origin', async () => {
    const networks = await firstValueFrom(service.fetch());

    expect(networks.map((network) => network.name)).toEqual(['LinkedIn', 'GitHub', 'Codewars']);
  });
});
