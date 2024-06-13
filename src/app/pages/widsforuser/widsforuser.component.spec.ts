import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidsforuserComponent } from './widsforuser.component';

describe('WidsforuserComponent', () => {
  let component: WidsforuserComponent;
  let fixture: ComponentFixture<WidsforuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidsforuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WidsforuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
