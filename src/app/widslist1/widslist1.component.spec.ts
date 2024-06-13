import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widslist1Component } from './widslist1.component';

describe('Widslist1Component', () => {
  let component: Widslist1Component;
  let fixture: ComponentFixture<Widslist1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Widslist1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Widslist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
