import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderGenericComponent } from './generic.component';

describe('InpinjComponent', () => {
  let component: ReaderGenericComponent;
  let fixture: ComponentFixture<ReaderGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
