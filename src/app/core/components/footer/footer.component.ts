import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {

  public year: number = new Date().getFullYear();

  // TODO (dpardo): Add built technologies

}
