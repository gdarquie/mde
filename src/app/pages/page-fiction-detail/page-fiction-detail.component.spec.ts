import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFictionDetailComponent } from './page-fiction-detail.component';

describe('PageFictionDetailComponent', () => {
  let component: PageFictionDetailComponent;
  let fixture: ComponentFixture<PageFictionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFictionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFictionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
