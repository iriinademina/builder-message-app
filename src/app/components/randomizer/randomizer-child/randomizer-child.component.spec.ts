import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomizerChildComponent } from './randomizer-child.component';

describe('RandomizerChildComponent', () => {
  let component: RandomizerChildComponent;
  let fixture: ComponentFixture<RandomizerChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomizerChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomizerChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
