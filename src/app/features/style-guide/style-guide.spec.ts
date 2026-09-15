import { ComponentFixture, TestBed } from '@angular/core/testing';

import StyleGuide from './style-guide';

describe('StyleGuide', () => {
  let fixture: ComponentFixture<StyleGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleGuide],
    }).compileComponents();

    fixture = TestBed.createComponent(StyleGuide);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should expose the complete specimen in the expected order', () => {
    const element = fixture.nativeElement as HTMLElement;
    const sectionIds = [...element.querySelectorAll('section[id]')].map((section) => section.id);

    expect(sectionIds).toEqual([
      'identity',
      'references',
      'wordmark',
      'color',
      'typography',
      'layout',
      'graphic-language',
      'actions',
      'forms',
      'content',
      'data-feedback',
      'accessibility',
    ]);
  });

  it('should provide semantic landmarks and accessible form controls', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('h1')).toHaveLength(1);
    expect(element.querySelector('main')).toBeTruthy();
    expect(element.querySelector('label[for="style-guide-name"]')).toBeTruthy();
    expect(element.querySelector('fieldset legend')).toBeTruthy();
    expect(element.querySelector('[role="status"]')).toBeTruthy();
  });

  it('should communicate the revised visual direction and token states', () => {
    const element = fixture.nativeElement as HTMLElement;
    const identity = element.querySelector('#identity');
    const color = element.querySelector('#color');

    expect(identity?.textContent).toContain('70% performance / 30% business');
    expect(color?.textContent).toContain('BASE');
    expect(color?.textContent).toContain('CANDIDATE');
    expect(color?.textContent).toContain('DEPRECATED');
  });

  it('should expose professional, editorial and combined content variants', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('[data-card-variant="professional"]')).toBeTruthy();
    expect(element.querySelector('[data-card-variant="editorial"]')).toBeTruthy();
    expect(element.querySelector('[data-card-variant="combined"]')).toBeTruthy();
  });

  it('should treat spectrum trails as decorative or explicitly described graphics', () => {
    const element = fixture.nativeElement as HTMLElement;
    const decorativeTrails = [
      ...element.querySelectorAll('.bg-dpardo-spectrum[aria-hidden="true"]'),
    ];
    const describedTrail = element.querySelector(
      'svg[aria-label*="transición de rojo a azul y cian"]',
    );

    expect(decorativeTrails.length).toBeGreaterThan(0);
    expect(describedTrail).toBeTruthy();
  });
});
