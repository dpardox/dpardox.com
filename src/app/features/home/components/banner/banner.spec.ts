import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner } from './banner';

describe('Banner', () => {
  let component: Banner;
  let fixture: ComponentFixture<Banner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Banner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Banner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the shared professional positioning', () => {
    expect(fixture.nativeElement.textContent).toContain('Senior Angular Developer');
    expect(fixture.nativeElement.textContent).toContain('AI-assisted Spec-Driven Development');
  });
});
