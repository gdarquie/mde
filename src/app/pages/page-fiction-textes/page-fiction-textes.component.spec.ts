import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFictionTextesComponent } from './page-fiction-textes.component';

describe('PageFictionTextesComponent', () => {
  let component: PageFictionTextesComponent;
  let fixture: ComponentFixture<PageFictionTextesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFictionTextesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFictionTextesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
