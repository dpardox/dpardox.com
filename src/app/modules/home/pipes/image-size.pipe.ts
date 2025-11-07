import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'imageSize',
    standalone: false
})
export class ImageSizePipe implements PipeTransform {

  transform(path: string, size: number): string {
    const filename = path.split('.');
    const ext = filename.pop();

    if (ext === 'svg') {
      return path;
    }

    return `${filename.join('.')}-${size}@2x.${ext}`;
  }

}
