import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputJsonComponent } from './output-json.component';

describe('OutputJsonComponent', () => {
  let component: OutputJsonComponent;
  let fixture: ComponentFixture<OutputJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
