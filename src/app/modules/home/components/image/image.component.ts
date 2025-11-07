import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { ImageSizePipe } from '../../pipes/image-size.pipe';

@Component({
    selector: 'app-image',
    standalone: true,
    imports: [NgClass, ImageSizePipe],
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss'],
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
