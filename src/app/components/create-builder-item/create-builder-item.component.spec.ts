import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBuilderItemComponent } from './create-builder-item.component';

describe('CreateBuilderItemComponent', () => {
    let component: CreateBuilderItemComponent;
    let fixture: ComponentFixture<CreateBuilderItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CreateBuilderItemComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CreateBuilderItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
