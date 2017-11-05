import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeAddFireBaseComponent } from './heroe-add-fire-base.component';

describe('HeroeAddFireBaseComponent', () => {
  let component: HeroeAddFireBaseComponent;
  let fixture: ComponentFixture<HeroeAddFireBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroeAddFireBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeAddFireBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
