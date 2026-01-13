import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Logo } from '@shared/components/logo/logo';

@Component({
  selector: 'app-footer',
  imports: [Logo, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly year = signal(new Date().getFullYear());
}
