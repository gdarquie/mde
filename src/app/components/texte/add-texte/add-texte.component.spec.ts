import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTexteComponent } from './add-texte.component';

describe('AddTexteComponent', () => {
  let component: AddTexteComponent;
  let fixture: ComponentFixture<AddTexteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTexteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTexteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
