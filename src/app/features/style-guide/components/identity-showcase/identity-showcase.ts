import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-identity-showcase',
  imports: [],
  templateUrl: './identity-showcase.html',
  styleUrl: './identity-showcase.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityShowcase {}
