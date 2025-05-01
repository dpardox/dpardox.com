import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePage ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    component.networks = [
      { name: 'test 1', user: 'test', link: 'https://www.example.com/test', image: 'test.png' },
      { name: 'test 2', user: 'test', link: 'https://www.example.com/test', image: 'test.png' },
      { name: 'test 3', user: 'test', link: 'https://www.example.com/test', image: 'test.png' },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toBe('Donovan Pardo');
  });

  it('should have description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain(`I'm Front-End Developer`);
    expect(compiled.querySelector('h2')?.textContent).toContain('🇨🇴 🇺🇸');
  });

  it('should have a list of app-network components', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-network')?.length).toEqual(3);
  });

  it('should have layout components', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-header')?.length).toEqual(1);
    expect(compiled.querySelectorAll('app-footer')?.length).toEqual(1);
  });

   it('should have an avatar', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-image')?.length).toEqual(1);
  });
});
