import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home/home.page';
import { ImageSizePipe } from './pipes/image-size.pipe';
import { ImageComponent } from './components/image/image.component';
import { HeaderComponent } from '@core/components/header/header.component';
import { FooterComponent } from '@core/components/footer/footer.component';
import { CardComponent } from '@core/components/card/card.component';


@NgModule({
  declarations: [
    HomePage,
    ImageSizePipe,
    ImageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderComponent,
    FooterComponent,
    CardComponent
  ]
})
export class HomeModule { }
