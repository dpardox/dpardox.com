import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { routes } from '../../app.routes';

describe('style guide route', () => {
  it('should lazy load the style guide feature', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const router = TestBed.inject(Router);

    await router.navigateByUrl('/style-guide');

    expect(router.url).toBe('/style-guide');
  });
});
