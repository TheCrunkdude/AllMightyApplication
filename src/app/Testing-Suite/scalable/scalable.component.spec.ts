import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalableComponent } from './scalable.component';

describe('ScalableComponent', () => {
  let component: ScalableComponent;
  let fixture: ComponentFixture<ScalableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScalableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScalableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
