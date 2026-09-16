import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Logo } from '@shared/components/logo/logo';

@Component({
  selector: 'app-accessibility-showcase',
  imports: [Logo],
  templateUrl: './accessibility-showcase.html',
  styleUrl: './accessibility-showcase.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessibilityShowcase {}
