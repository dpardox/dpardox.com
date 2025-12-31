import { Component } from '@angular/core';
import { Header } from '@shared/components/header/header';
import { Banner } from './components/banner/banner';
import { Networks } from 'src/app/pages/home/components/networks/networks';

@Component({
  selector: 'app-home',
  imports: [Header, Banner, Networks],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {

}
