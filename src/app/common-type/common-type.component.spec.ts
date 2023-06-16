import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTypeComponent } from './common-type.component';

describe('CommonTypeComponent', () => {
  let component: CommonTypeComponent;
  let fixture: ComponentFixture<CommonTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonTypeComponent]
    });
    fixture = TestBed.createComponent(CommonTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
