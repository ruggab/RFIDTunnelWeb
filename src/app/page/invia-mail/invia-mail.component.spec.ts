import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviaMailComponent } from './invia-mail.component';

describe('InviaMailComponent', () => {
  let component: InviaMailComponent;
  let fixture: ComponentFixture<InviaMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviaMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviaMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
