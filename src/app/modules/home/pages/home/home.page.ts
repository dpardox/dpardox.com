import { Component } from '@angular/core';
import { Network } from '../../interfaces/network.interface';

@Component({
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    standalone: false
})
export class HomePage {

  public networks: Network[] = [
    { name: 'LinkedIn', user: 'dpardox', link: 'https://www.linkedin.com/in/dpardox', image: 'linkedin.png' },
    { name: 'GitHub', user: 'dpardox', link: 'https://github.com/dpardox', image: 'github.png' },
    { name: 'Codewars', user: 'dpardox', link: 'https://www.codewars.com/users/dpardox/completed_solutions', image: 'codewars.svg' },
    { name: 'Stack Overflow', user: 'donovan-pardo', link: 'https://es.stackoverflow.com/users/15065/donovan-pardo', image: 'stackoverflow.png' },
  ];

  // TODO (dpardo): Add knowledge technologies and skills

}
