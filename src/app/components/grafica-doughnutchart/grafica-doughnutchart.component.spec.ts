import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaDoughnutchartComponent } from './grafica-doughnutchart.component';

describe('GraficaDoughnutchartComponent', () => {
  let component: GraficaDoughnutchartComponent;
  let fixture: ComponentFixture<GraficaDoughnutchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaDoughnutchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaDoughnutchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
