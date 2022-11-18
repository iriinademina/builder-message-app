import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageChildComponent } from './send-message-child.component';

describe('SendMessageChildComponent', () => {
    let component: SendMessageChildComponent;
    let fixture: ComponentFixture<SendMessageChildComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SendMessageChildComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SendMessageChildComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
