import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageCardComponent } from './send-message-card.component';

describe('SendMessageCardComponent', () => {
  let component: SendMessageCardComponent;
  let fixture: ComponentFixture<SendMessageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMessageCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendMessageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
