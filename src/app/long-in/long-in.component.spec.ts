import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongInComponent } from './long-in.component';

describe('LongInComponent', () => {
  let component: LongInComponent;
  let fixture: ComponentFixture<LongInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
