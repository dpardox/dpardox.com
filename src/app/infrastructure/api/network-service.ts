import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Network } from '@core/interfaces/network';
import { NetworkResponse } from '@infrastructure/dtos/network';
import { NetworkMapper } from '@infrastructure/mappers/network-mapper';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  private readonly http = inject(HttpClient);

  public fetch(): Observable<Network[]> {
    return this.http.get<NetworkResponse[]>('/api/networks.json').pipe(
      map((networks) => NetworkMapper.toDomainList(networks)),
    );
  }
}
