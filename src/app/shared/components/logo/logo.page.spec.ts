import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoPage } from './logo.page';

describe('LogoPage', () => {
  let component: LogoPage;
  let fixture: ComponentFixture<LogoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
