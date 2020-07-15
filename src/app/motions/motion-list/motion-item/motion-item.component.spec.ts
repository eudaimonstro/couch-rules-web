import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionItemComponent } from './motion-item.component';

describe('MotionItemComponent', () => {
  let component: MotionItemComponent;
  let fixture: ComponentFixture<MotionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
