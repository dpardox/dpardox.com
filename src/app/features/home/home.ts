import { Component } from '@angular/core';
import { Header } from '@shared/components/header/header';
import { Banner } from './components/banner/banner';

@Component({
  selector: 'app-home',
  imports: [Header, Banner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {

}
