import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPayementGatwayApiComponent } from './add-payement-gatway-api.component';

describe('AddPayementGatwayApiComponent', () => {
  let component: AddPayementGatwayApiComponent;
  let fixture: ComponentFixture<AddPayementGatwayApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPayementGatwayApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPayementGatwayApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
