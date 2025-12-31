import { Component, signal } from '@angular/core';
import { Card } from '@shared/components/card/card';

export interface Network {
  name: string;
  user: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-networks',
  imports: [Card],
  templateUrl: './networks.html',
  styleUrl: './networks.css',
})
export class Networks {

  readonly networks = signal<Network[]>([
    { name: 'LinkedIn', user: 'dpardox', link: 'https://www.linkedin.com/in/dpardox', image: 'linkedin.png' },
    { name: 'GitHub', user: 'dpardox', link: 'https://github.com/dpardox', image: 'github.png' },
    { name: 'Codewars', user: 'dpardox', link: 'https://www.codewars.com/users/dpardox/completed_solutions', image: 'codewars.svg' },
    { name: 'Stack Overflow', user: 'donovan-pardo', link: 'https://es.stackoverflow.com/users/15065/donovan-pardo', image: 'stackoverflow.png' },
  ]);

}
