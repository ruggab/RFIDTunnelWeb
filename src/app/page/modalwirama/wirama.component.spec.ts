import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiramaComponent } from './wirama.component';

describe('WiramaComponent', () => {
  let component: WiramaComponent;
  let fixture: ComponentFixture<WiramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WiramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
