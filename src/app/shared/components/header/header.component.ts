import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LogoPage } from '@shared/components/logo/logo.page';

@Component({
  selector: 'app-header',
  imports: [LogoPage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
