import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card } from '@shared/components/card/card';

@Component({
  selector: 'app-components-showcase',
  imports: [Card],
  templateUrl: './components-showcase.html',
  styleUrl: './components-showcase.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentsShowcase {}
