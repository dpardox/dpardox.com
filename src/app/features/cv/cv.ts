import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NetworksService } from '@core/services/networks-service';
import { Web } from '@layouts/web/web';

@Component({
  selector: 'app-cv',
  imports: [Web],
  templateUrl: './cv.html',
  styleUrl: './cv.css',
})
export default class CV {
  private readonly networksService = inject(NetworksService);
  public readonly linkedIn = toSignal(this.networksService.getLinkedIn());
}
