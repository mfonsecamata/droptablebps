import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficBarcharComponent } from './grafic-barchar.component';

describe('GraficBarcharComponent', () => {
  let component: GraficBarcharComponent;
  let fixture: ComponentFixture<GraficBarcharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficBarcharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficBarcharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
