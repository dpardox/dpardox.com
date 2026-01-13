import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NetworksService } from '@core/services/networks-service';
import { Card } from '@shared/components/card/card';

@Component({
  selector: 'app-networks',
  imports: [Card],
  templateUrl: './networks.html',
  styleUrl: './networks.css',
})
export class Networks {
  private readonly networksService = inject(NetworksService);
  public readonly networks = toSignal(this.networksService.getNetworks(), { initialValue: [] });
}
