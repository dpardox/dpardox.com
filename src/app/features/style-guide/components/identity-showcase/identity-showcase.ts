import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Logo } from '@shared/components/logo/logo';

@Component({
  selector: 'app-identity-showcase',
  imports: [Logo],
  templateUrl: './identity-showcase.html',
  styleUrl: './identity-showcase.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityShowcase {}
