import { Component } from '@angular/core';
import { Header } from '@shared/components/header/header';
import { Banner } from './components/banner/banner';
import { Networks } from 'src/app/pages/home/components/networks/networks';
import { Footer } from '@shared/components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Header, Banner, Networks, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {

}
