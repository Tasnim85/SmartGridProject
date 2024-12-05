import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartSimpleComponent } from './line-chart-simple.component';

describe('LineChartSimpleComponent', () => {
  let component: LineChartSimpleComponent;
  let fixture: ComponentFixture<LineChartSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
