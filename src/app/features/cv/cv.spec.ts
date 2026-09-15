import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import CV from './cv';
import { CvMetadata } from './enums/cv-metadata';

describe('CV', () => {
  let component: CV;
  let fixture: ComponentFixture<CV>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CV],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CV);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should present the authorized professional positioning and current experience', () => {
    const pageContent = fixture.nativeElement.textContent;

    expect(pageContent).toContain('Senior Angular Developer');
    expect(pageContent).toContain('Liderazgo técnico hands-on');
    expect(pageContent).toContain('GlobalTask');
    expect(pageContent).toContain('AI-assisted Spec-Driven Development');
    expect(pageContent).toContain('Noviembre de 2017');
    expect(pageContent).toContain('Marzo de 2016');
    expect(pageContent).toContain('Octubre de 2012');
    expect(pageContent).toContain('Tecnólogo en Análisis y Desarrollo de Sistemas de Información');
    expect(pageContent).toContain('Angular · TypeScript · RxJS · NgRx · Playwright');
  });

  it('should provide semantic headings and contact navigation', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('h1')?.textContent).toContain('Donovan Pardo');
    expect(element.querySelector('nav[aria-label="Datos de contacto"]')).toBeTruthy();
    expect(element.querySelectorAll('article')).toHaveLength(6);
    expect(element.querySelectorAll('time')).toHaveLength(11);
    expect(element.querySelector('a[href="https://dpardox.com"]')?.textContent).toContain('dpardox.com');
  });

  it('should apply the canonical CV metadata', () => {
    const meta = TestBed.inject(Meta);
    const title = TestBed.inject(Title);

    expect(document.documentElement.lang).toBe(CvMetadata.Language);
    expect(title.getTitle()).toBe(CvMetadata.Title);
    expect(meta.getTag(`name="${CvMetadata.DescriptionName}"`)?.content).toBe(CvMetadata.Description);
    expect(document.querySelector<HTMLLinkElement>(CvMetadata.CanonicalSelector)?.href).toBe(CvMetadata.CanonicalUrl);
  });
});
