import {
    Directive,
    Output,
    EventEmitter,
    SimpleChange,
    ContentChildren,
    QueryList,
    ElementRef,
    ViewChildren,
    AfterViewInit,
    OnInit,
    ViewContainerRef,
    HostListener,
} from '@angular/core';

interface ZoomParams {
    shift: number;
    x?: number;
    y?: number;
}

@Directive({
    selector: '[appBuilderZoom]',
})
export class BuilderZoomDirective implements AfterViewInit, OnInit {
    private element: HTMLElement;
    private zoomStep = 0.1;
    private zoomCurrent = 1;
    private zoomMin = 0.35;
    private zoomMax = 1;

    constructor(private elementRef: ElementRef, private vcRef: ViewContainerRef) {
        this.element = this.elementRef.nativeElement as HTMLElement;
    }

    ngAfterViewInit() {}

    ngAfterContentInit() {}

    ngOnInit(): void {}

    @HostListener('mousewheel', ['$event']) onMousewheel(event: any) {
        console.log(event);
        event.preventDefault();
        if (event.deltaY > 0) {
            this.zoomCurrent += this.zoomStep;
            this.element.style.setProperty('transition', 'all 200ms ease-out');
            this.element.style.setProperty('transform', `scale(${this.zoomCurrent})`);
        } else {
            this.zoomCurrent -= this.zoomStep;
            this.element.style.setProperty('transition', 'all 200ms ease-out');
            this.element.style.setProperty('transform', `scale(${this.zoomCurrent})`);
        }
        this.zoomCurrent = Math.min(Math.max(this.zoomMin, this.zoomCurrent), this.zoomMax);
    }
}
