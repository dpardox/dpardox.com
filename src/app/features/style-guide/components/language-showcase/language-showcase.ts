import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-language-showcase',
  imports: [],
  templateUrl: './language-showcase.html',
  styleUrl: './language-showcase.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageShowcase {}
