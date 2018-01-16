import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextesComponent } from './textes.component';

describe('TextesComponent', () => {
  let component: TextesComponent;
  let fixture: ComponentFixture<TextesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
