import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Logo } from '@shared/components/logo/logo';

@Component({
  selector: 'app-header',
  imports: [Logo, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
