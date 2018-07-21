import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonnageComponent } from './add-personnage.component';

describe('AddPersonnageComponent', () => {
  let component: AddPersonnageComponent;
  let fixture: ComponentFixture<AddPersonnageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPersonnageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
