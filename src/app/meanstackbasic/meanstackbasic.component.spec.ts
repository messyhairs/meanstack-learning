import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanstackbasicComponent } from './meanstackbasic.component';

describe('MeanstackbasicComponent', () => {
  let component: MeanstackbasicComponent;
  let fixture: ComponentFixture<MeanstackbasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeanstackbasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeanstackbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
