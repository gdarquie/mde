import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFictionPersonnagesComponent } from './page-fiction-personnages.component';

describe('PageFictionPersonnagesComponent', () => {
  let component: PageFictionPersonnagesComponent;
  let fixture: ComponentFixture<PageFictionPersonnagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFictionPersonnagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFictionPersonnagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
