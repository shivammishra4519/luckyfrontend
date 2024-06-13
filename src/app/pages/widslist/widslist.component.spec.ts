import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidslistComponent } from './widslist.component';

describe('WidslistComponent', () => {
  let component: WidslistComponent;
  let fixture: ComponentFixture<WidslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WidslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
