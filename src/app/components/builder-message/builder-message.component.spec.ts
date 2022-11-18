import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderMessageComponent } from './builder-message.component';

describe('BuilderMessageComponent', () => {
    let component: BuilderMessageComponent;
    let fixture: ComponentFixture<BuilderMessageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BuilderMessageComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(BuilderMessageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
