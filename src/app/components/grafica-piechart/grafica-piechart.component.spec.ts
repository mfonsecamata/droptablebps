import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaPiechartComponent } from './grafica-piechart.component';

describe('GraficaPiechartComponent', () => {
  let component: GraficaPiechartComponent;
  let fixture: ComponentFixture<GraficaPiechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaPiechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
