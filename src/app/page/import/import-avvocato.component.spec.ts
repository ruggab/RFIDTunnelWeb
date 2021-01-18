import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportAvvocatoComponent } from './import-avvocato.component';

describe('ImportAvvocatoComponent', () => {
  let component: ImportAvvocatoComponent;
  let fixture: ComponentFixture<ImportAvvocatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportAvvocatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportAvvocatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
