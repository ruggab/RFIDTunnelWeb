import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfReaderComponent } from './confreader.component';

describe('ConfReaderComponent', () => {
  let component: ConfReaderComponent;
  let fixture: ComponentFixture<ConfReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfReaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
