import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, signal, viewChild } from '@angular/core';
import TypeIt from 'typeit';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements AfterViewInit {

  private readonly typingElement = viewChild<ElementRef<HTMLAnchorElement>>('typing');
  private readonly typeitInstance = signal<TypeIt | null>(null);

  ngAfterViewInit() {
    this.startTyping();
  }

  public startTyping() {
    const typingAnchor = this.typingElement();

    if (!typingAnchor) {
      return;
    }

    let instance = this.typeitInstance();

    if (!instance) {
      instance = new TypeIt(typingAnchor.nativeElement, {
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
      this.typeitInstance.set(instance);
      return;
    }

    if (instance.is('completed')) {
      instance.delete(undefined, { delay: 300 }).flush(() => instance.reset(undefined).go());
    }
  }

}
