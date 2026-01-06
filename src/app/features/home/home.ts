import { Component } from '@angular/core';
import { Banner } from './components/banner/banner';
import { Networks } from '@features/home/components/networks/networks';
import { Web } from "src/app/layout/web/web";

@Component({
  selector: 'app-home',
  imports: [Banner, Networks, Web],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {

}
