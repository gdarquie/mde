import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjetsComponent } from './page-projets.component';

describe('PageProjetsComponent', () => {
  let component: PageProjetsComponent;
  let fixture: ComponentFixture<PageProjetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProjetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
