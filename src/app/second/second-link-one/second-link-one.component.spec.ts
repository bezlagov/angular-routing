import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLinkOneComponent } from './second-link-one.component';

describe('SecondLinkOneComponent', () => {
  let component: SecondLinkOneComponent;
  let fixture: ComponentFixture<SecondLinkOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondLinkOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondLinkOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
