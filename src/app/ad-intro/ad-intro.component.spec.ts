import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdIntroComponent } from './ad-intro.component';

describe('AdIntroComponent', () => {
  let component: AdIntroComponent;
  let fixture: ComponentFixture<AdIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
