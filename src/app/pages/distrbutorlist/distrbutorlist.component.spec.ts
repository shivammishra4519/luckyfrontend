import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrbutorlistComponent } from './distrbutorlist.component';

describe('DistrbutorlistComponent', () => {
  let component: DistrbutorlistComponent;
  let fixture: ComponentFixture<DistrbutorlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistrbutorlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistrbutorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
