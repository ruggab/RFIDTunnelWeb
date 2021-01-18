import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvvocatoGridComponent } from './avvocato-grid.component';

describe('AvvocatoGridComponent', () => {
  let component: AvvocatoGridComponent;
  let fixture: ComponentFixture<AvvocatoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvvocatoGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvvocatoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
