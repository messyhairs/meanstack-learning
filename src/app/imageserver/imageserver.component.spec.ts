import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageserverComponent } from './imageserver.component';

describe('ImageserverComponent', () => {
  let component: ImageserverComponent;
  let fixture: ComponentFixture<ImageserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
