import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLinkTwoComponent } from './second-link-two.component';

describe('SecondLinkTwoComponent', () => {
  let component: SecondLinkTwoComponent;
  let fixture: ComponentFixture<SecondLinkTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondLinkTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondLinkTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
