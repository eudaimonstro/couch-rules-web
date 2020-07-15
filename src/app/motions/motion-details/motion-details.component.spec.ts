import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionDetailsComponent } from './motion-details.component';

describe('MotionDetailsComponent', () => {
  let component: MotionDetailsComponent;
  let fixture: ComponentFixture<MotionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
