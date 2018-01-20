import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTextesComponent } from './page-textes.component';

describe('PageTextesComponent', () => {
  let component: PageTextesComponent;
  let fixture: ComponentFixture<PageTextesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTextesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTextesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
