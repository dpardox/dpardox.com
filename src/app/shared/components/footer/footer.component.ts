import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { LogoPage } from '@shared/components/logo/logo.page';

@Component({
  selector: 'app-footer',
  imports: [LogoPage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  readonly year = signal(new Date().getFullYear());
}
