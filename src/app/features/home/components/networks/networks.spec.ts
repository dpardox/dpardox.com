import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { NetworkService } from '@infrastructure/api/network-service';

import { Networks } from './networks';

describe('Networks', () => {
  let component: Networks;
  let fixture: ComponentFixture<Networks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Networks],
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

    fixture = TestBed.createComponent(Networks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
