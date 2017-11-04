import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapJavascriptComponent } from './google-map-javascript.component';

describe('GoogleMapJavascriptComponent', () => {
  let component: GoogleMapJavascriptComponent;
  let fixture: ComponentFixture<GoogleMapJavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapJavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
