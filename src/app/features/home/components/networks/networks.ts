import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Card } from '@shared/components/card/card';
import { NetworksService } from '@features/home/services/networks.service';

@Component({
  selector: 'app-networks',
  imports: [Card],
  templateUrl: './networks.html',
  styleUrl: './networks.css',
})
export class Networks {

  private readonly networksService = inject(NetworksService);

  readonly networks = toSignal(this.networksService.getNetworks(), { initialValue: [] });

}
