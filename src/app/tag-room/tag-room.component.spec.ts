import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagRoomComponent } from './tag-room.component';

describe('TagRoomComponent', () => {
  let component: TagRoomComponent;
  let fixture: ComponentFixture<TagRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
