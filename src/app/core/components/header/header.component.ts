import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import TypeIt from 'typeit';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('typing') typingElement!: ElementRef;

  private typeitInstance!: TypeIt;

  ngAfterViewInit() {
    this.startTyping();
  }

  public startTyping() {
    if (!this.typeitInstance) {
      this.typeitInstance = new TypeIt(this.typingElement.nativeElement, {
        strings: '',
        speed: 80,
        startDelay: 900,
        afterComplete: (instance: TypeIt) => {
          instance.destroy();
        }
      })
      .type('Dev', { delay: 700 })
      .delete(2, { delay: 700 })
      .type('onovan Pardo',  { delay: 500 })
      .move(-4, { speed: 300, delay: 300 })
      .delete(9, { delay: 300 })
      .type('d',  { delay: 150 })
      .type('p',  { delay: 200 })
      .move(null, { to: 'END', delay: 300 })
      .type('<span class="has-text-primary">x</span>', { delay: 900 })
      .go();
    }

    if (this.typeitInstance.is('completed')) {
      this.typeitInstance.delete(undefined, { delay: 300 }).flush(() => this.typeitInstance.reset(undefined).go());
    }

    const abc = 'lorem'
  }

}
