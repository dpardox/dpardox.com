import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Networks } from '@core/enums/networks';
import { Network } from '@core/interfaces/network';
import { NetworkService } from '@infrastructure/api/network-service';

@Injectable({
  providedIn: 'root',
})
export class NetworksService {
  private readonly networkService = inject(NetworkService);

  public getLinkedIn(): Observable<Network | undefined> {
    return this.getNetworks().pipe(
      map((networks) => networks.find((network) => network.name === Networks.LinkedIn) ?? networks[0]),
    );
  }

  public getNetworks(): Observable<Network[]> {
    return this.networkService.fetch();
  }
}
