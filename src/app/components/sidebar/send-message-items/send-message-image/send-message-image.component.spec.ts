import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageImageComponent } from './send-message-image.component';

describe('SendMessageImageComponent', () => {
  let component: SendMessageImageComponent;
  let fixture: ComponentFixture<SendMessageImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMessageImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendMessageImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
