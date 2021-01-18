import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviaPecComponent } from './invia-pec.component';

describe('InviaPecComponent', () => {
  let component: InviaPecComponent;
  let fixture: ComponentFixture<InviaPecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviaPecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviaPecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
