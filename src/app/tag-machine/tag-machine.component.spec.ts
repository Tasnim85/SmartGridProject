import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagMachineComponent } from './tag-machine.component';

describe('TagMachineComponent', () => {
  let component: TagMachineComponent;
  let fixture: ComponentFixture<TagMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagMachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
