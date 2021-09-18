import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionJsonComponent } from './action-json.component';

describe('ActionJsonComponent', () => {
  let component: ActionJsonComponent;
  let fixture: ComponentFixture<ActionJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
