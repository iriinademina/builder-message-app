import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageTextComponent } from './send-message-text.component';

describe('SendMessageTextComponent', () => {
  let component: SendMessageTextComponent;
  let fixture: ComponentFixture<SendMessageTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMessageTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendMessageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
