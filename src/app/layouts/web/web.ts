import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-web',
  imports: [Header, Footer],
  templateUrl: './web.html',
})
export class Web {

}
