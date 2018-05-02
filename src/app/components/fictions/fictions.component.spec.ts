import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FictionsComponent } from './fictions.component';

describe('FictionsComponent', () => {
  let component: FictionsComponent;
  let fixture: ComponentFixture<FictionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FictionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
