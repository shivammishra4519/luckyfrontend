import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCommessionComponent } from './set-commession.component';

describe('SetCommessionComponent', () => {
  let component: SetCommessionComponent;
  let fixture: ComponentFixture<SetCommessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetCommessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetCommessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
