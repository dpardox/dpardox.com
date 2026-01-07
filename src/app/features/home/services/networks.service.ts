import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Network {
  name: string;
  user: string;
  image: string;
  link: string;
}

const NETWORKS: Network[] = [
  { name: 'LinkedIn', user: 'in/dpardox', link: 'https://www.linkedin.com/in/dpardox', image: 'linkedin.png' },
  { name: 'GitHub', user: '@dpardox', link: 'https://github.com/dpardox', image: 'github.png' },
  { name: 'Codewars', user: '@dpardox', link: 'https://www.codewars.com/users/dpardox/completed_solutions', image: 'codewars.svg' },
];

@Injectable({ providedIn: 'root' })
export class NetworksService {

  getNetworks() {
    return of(NETWORKS);
  }

}
