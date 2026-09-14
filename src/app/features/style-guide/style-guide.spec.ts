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
    const sectionIds = [...element.querySelectorAll('section[id]')].map(
      (section) => section.id,
    );

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
});
