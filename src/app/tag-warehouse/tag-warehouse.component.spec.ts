import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagWarehouseComponent } from './tag-warehouse.component';

describe('TagWarehouseComponent', () => {
  let component: TagWarehouseComponent;
  let fixture: ComponentFixture<TagWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagWarehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
