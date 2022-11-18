import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageItemsComponent } from './send-message-items.component';

describe('SendMessageItemsComponent', () => {
  let component: SendMessageItemsComponent;
  let fixture: ComponentFixture<SendMessageItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMessageItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendMessageItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
