import { Component, signal } from '@angular/core';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-footer',
  imports: [Logo],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly year = signal(new Date().getFullYear());
}
