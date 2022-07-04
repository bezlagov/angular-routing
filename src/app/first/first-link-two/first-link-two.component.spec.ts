import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLinkTwoComponent } from './first-link-two.component';

describe('FirstLinkTwoComponent', () => {
  let component: FirstLinkTwoComponent;
  let fixture: ComponentFixture<FirstLinkTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstLinkTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstLinkTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
