import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss'],
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent {

  readonly src = input.required<string>();
  readonly alt = input('');
  readonly dimension = input(64);
  readonly rounded = input(false);

  readonly dimensionClass = computed(() => {
    const size = this.dimension();
    return `is-${size}x${size}`;
  });

}
