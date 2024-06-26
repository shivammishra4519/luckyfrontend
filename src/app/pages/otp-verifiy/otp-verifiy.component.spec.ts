import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpVerifiyComponent } from './otp-verifiy.component';

describe('OtpVerifiyComponent', () => {
  let component: OtpVerifiyComponent;
  let fixture: ComponentFixture<OtpVerifiyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtpVerifiyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtpVerifiyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
