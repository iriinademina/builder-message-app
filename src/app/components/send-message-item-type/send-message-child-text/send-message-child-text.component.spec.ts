import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageChildTextComponent } from './send-message-child-text.component';

describe('SendMessageChildTextComponent', () => {
  let component: SendMessageChildTextComponent;
  let fixture: ComponentFixture<SendMessageChildTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMessageChildTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendMessageChildTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
