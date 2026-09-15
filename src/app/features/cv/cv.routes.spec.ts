import { DOCUMENT } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { provideRouter, Router, UrlSerializer } from '@angular/router';

import { App } from '../../app';
import { routes } from '../../app.routes';
import { UrlSerializerAdapter } from '../../infrastructure/adapters/url-serializer.adapter';
import { CvMetadata } from './enums/cv-metadata';

describe('CV routes', () => {
  let appFixture: ComponentFixture<App>;
  let document: Document;
  let meta: Meta;
  let router: Router;
  let title: Title;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes), { provide: UrlSerializer, useClass: UrlSerializerAdapter }],
    }).compileComponents();

    appFixture = TestBed.createComponent(App);
    document = TestBed.inject(DOCUMENT);
    meta = TestBed.inject(Meta);
    router = TestBed.inject(Router);
    title = TestBed.inject(Title);
    appFixture.detectChanges();
  });

  it.each(['/cv', '/cv/'])('should lazy load the CV at %s', async (url) => {
    await router.navigateByUrl(url);
    await appFixture.whenStable();

    expect(router.url).toBe('/cv');
    expect(appFixture.nativeElement.textContent).toContain('Currículum profesional');
  });

  it('should restore document metadata after leaving the CV', async () => {
    const initialLanguage = document.documentElement.lang;
    const initialTitle = title.getTitle();

    await router.navigateByUrl('/cv');
    await appFixture.whenStable();

    expect(document.documentElement.lang).toBe(CvMetadata.Language);
    expect(title.getTitle()).toBe(CvMetadata.Title);

    await router.navigateByUrl('/');
    await appFixture.whenStable();

    expect(document.documentElement.lang).toBe(initialLanguage);
    expect(title.getTitle()).toBe(initialTitle);
    expect(meta.getTag(`name="${CvMetadata.DescriptionName}"`)).toBeNull();
    expect(document.querySelector(CvMetadata.CanonicalSelector)).toBeNull();
  });
});
