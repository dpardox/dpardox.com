import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Web } from './web';

describe('Web', () => {
  let component: Web;
  let fixture: ComponentFixture<Web>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Web],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Web);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
