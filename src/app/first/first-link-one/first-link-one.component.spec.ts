import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLinkOneComponent } from './first-link-one.component';

describe('FirstLinkOneComponent', () => {
  let component: FirstLinkOneComponent;
  let fixture: ComponentFixture<FirstLinkOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstLinkOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstLinkOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
