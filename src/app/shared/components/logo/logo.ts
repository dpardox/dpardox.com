import { Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
})
export class Logo {
  public readonly mode = input<'light' | 'dark'>('light');
  public readonly monochrome = input(false);
}
