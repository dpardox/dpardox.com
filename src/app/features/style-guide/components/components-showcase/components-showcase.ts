import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-components-showcase',
  imports: [],
  templateUrl: './components-showcase.html',
  styleUrl: './components-showcase.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentsShowcase {}
