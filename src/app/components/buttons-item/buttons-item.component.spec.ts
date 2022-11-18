import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsItemComponent } from './buttons-item.component';

describe('ButtonsItemComponent', () => {
  let component: ButtonsItemComponent;
  let fixture: ComponentFixture<ButtonsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
