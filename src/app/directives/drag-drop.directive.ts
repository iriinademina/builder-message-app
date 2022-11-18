import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription, fromEvent, takeUntil } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
    selector: '[appDragDrop]',
})
export class DragDropDirective implements OnInit, OnDestroy {
    private element: HTMLElement;
    private subscriptions: Subscription[] = [];

    constructor(private elementRef: ElementRef, @Inject(DOCUMENT) private document: any) {}

    ngOnInit(): void {
        this.element = this.elementRef.nativeElement as HTMLElement;
        this.initDrag();
    }

    initDrag(): void {
        const dragStart$ = fromEvent<MouseEvent>(this.element, 'mousedown');
        const dragEnd$ = fromEvent<MouseEvent>(this.document, 'mouseup');
        const drag$ = fromEvent<MouseEvent>(this.document, 'mousemove').pipe(takeUntil(dragEnd$));

     
        let initialX: number,
            initialY: number,
            currentX = 0,
            currentY = 0;

        let dragSub: Subscription = Subscription.EMPTY;

      
        const dragStartSub = dragStart$.subscribe((event: MouseEvent) => {
            initialX = event.clientX - currentX;
            initialY = event.clientY - currentY;
            this.element.classList.add('free-dragging');

          
            dragSub = drag$.subscribe((event: MouseEvent) => {
                event.preventDefault();
                currentX = event.clientX - initialX;
                currentY = event.clientY - initialY;

                this.element.style.transform = 'translate3d(' + currentX + 'px, ' + currentY + 'px, 0)';
                this.element.style.pointerEvents = 'none';
            });
        });

        const dragEndSub = dragEnd$.subscribe(() => {
          
            initialX = currentX;
            initialY = currentY;
            this.element.classList.remove('free-dragging');
            this.element.style.pointerEvents = 'auto';
            if (dragSub) {
                dragSub.unsubscribe();
            }
        });
       
        this.subscriptions.push.apply(this.subscriptions, [dragStartSub, dragSub, dragEndSub]);
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub?.unsubscribe());
    }
}
