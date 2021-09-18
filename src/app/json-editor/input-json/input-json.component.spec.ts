import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputJsonComponent } from './input-json.component';

describe('InputJsonComponent', () => {
  let component: InputJsonComponent;
  let fixture: ComponentFixture<InputJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
