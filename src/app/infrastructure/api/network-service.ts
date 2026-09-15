import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import networkResponses from '../../../../public/api/networks.json';

import { Network } from '@core/interfaces/network';
import { NetworkMapper } from '@infrastructure/mappers/network-mapper';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  public fetch(): Observable<Network[]> {
    return of(networkResponses).pipe(
      map((networks) => NetworkMapper.toDomainList(networks)),
    );
  }
}
