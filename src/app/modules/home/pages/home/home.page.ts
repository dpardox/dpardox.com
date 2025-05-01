import { Component, OnInit } from '@angular/core';
import { Network } from '../../interfaces/network.interface';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  public networks: Network[] = [
    { name: 'LinkedIn', user: 'dpardox', link: 'https://www.linkedin.com/in/dpardox', image: 'linkedin.png', color: '#0177B7' },
    { name: 'GitHub', user: 'dpardox', link: 'https://github.com/dpardox', image: 'github.png', color: '#000000' },
    { name: 'Codewars', user: 'dpardox', link: 'https://www.codewars.com/users/dpardox/completed_solutions', image: 'codewars.svg', color: '#B1361E' },
    { name: 'Stack Overflow', user: 'donovan-pardo', link: 'https://es.stackoverflow.com/users/15065/donovan-pardo', image: 'stackoverflow.png', color: '#F58023' },
  ];

  constructor() { }

  ngOnInit(): void { }

  // TODO (dpardo): Add knowledge technologies and skills

}
