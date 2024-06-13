import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidslistbynumComponent } from './widslistbynum.component';

describe('WidslistbynumComponent', () => {
  let component: WidslistbynumComponent;
  let fixture: ComponentFixture<WidslistbynumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidslistbynumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WidslistbynumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
