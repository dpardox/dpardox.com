import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { CardComponent } from '@core/components/card/card.component';
import { FooterComponent } from '@core/components/footer/footer.component';
import { HeaderComponent } from '@core/components/header/header.component';

import { ImageComponent } from '../../components/image/image.component';
import { Network } from '../../interfaces/network.interface';

@Component({
    standalone: true,
    imports: [HeaderComponent, FooterComponent, CardComponent, ImageComponent],
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

  readonly networks = signal<Network[]>([
    { name: 'LinkedIn', user: 'dpardox', link: 'https://www.linkedin.com/in/dpardox', image: 'linkedin.png' },
    { name: 'GitHub', user: 'dpardox', link: 'https://github.com/dpardox', image: 'github.png' },
    { name: 'Codewars', user: 'dpardox', link: 'https://www.codewars.com/users/dpardox/completed_solutions', image: 'codewars.svg' },
    { name: 'Stack Overflow', user: 'donovan-pardo', link: 'https://es.stackoverflow.com/users/15065/donovan-pardo', image: 'stackoverflow.png' },
  ]);

  // TODO (dpardo): Add knowledge technologies and skills

}
