import { Injectable } from '@angular/core';
import { DefaultUrlSerializer, UrlTree } from '@angular/router';

@Injectable()
export class UrlSerializerAdapter extends DefaultUrlSerializer {
  public override parse(url: string): UrlTree {
    const normalizedUrl = url.length > 1 ? url.replace(/\/+([?#]|$)/, '$1') : url;

    return super.parse(normalizedUrl);
  }
}
