import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdContainerComponent } from './ad-container.component';

describe('AdContainerComponent', () => {
  let component: AdContainerComponent;
  let fixture: ComponentFixture<AdContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
