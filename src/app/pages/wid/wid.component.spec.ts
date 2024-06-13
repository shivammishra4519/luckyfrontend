import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidComponent } from './wid.component';

describe('WidComponent', () => {
  let component: WidComponent;
  let fixture: ComponentFixture<WidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
