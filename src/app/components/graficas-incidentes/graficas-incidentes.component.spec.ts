import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasIncidentesComponent } from './graficas-incidentes.component';

describe('GraficasIncidentesComponent', () => {
  let component: GraficasIncidentesComponent;
  let fixture: ComponentFixture<GraficasIncidentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficasIncidentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficasIncidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
