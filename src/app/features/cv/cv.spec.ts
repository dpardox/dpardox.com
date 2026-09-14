import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { NetworkService } from '@infrastructure/api/network-service';

import CV from './cv';

describe('CV', () => {
  let component: CV;
  let fixture: ComponentFixture<CV>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CV],
      providers: [
        provideRouter([]),
        {
          provide: NetworkService,
          useValue: {
            fetch: () => of([]),
          },
        },
      ],
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
  });

  it('should provide semantic headings and contact navigation', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('h1')?.textContent).toContain('Donovan Pardo');
    expect(element.querySelector('nav[aria-label="Datos de contacto"]')).toBeTruthy();
    expect(element.querySelectorAll('article').length).toBeGreaterThan(0);
  });
});
