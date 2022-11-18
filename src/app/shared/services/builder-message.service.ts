import { Injectable, EmbeddedViewRef, ViewContainerRef, ComponentRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BuilderMessageItem } from '../models/builderMessageItem';


@Injectable({
    providedIn: 'root',
})
export class BuilderMessageService {

    constructor() {}

    addDynamicComponent(
        viewRef: ViewContainerRef,
        component: any,
        dataItem: BuilderMessageItem
    ): ComponentRef<any> {
        const componentRef = viewRef.createComponent(component);
        componentRef.setInput('dataItem', dataItem);
        return componentRef;
    }

    removeDynamicComponent(
        viewRef: ViewContainerRef,
        ind: string | number,
        componentRefs: ComponentRef<any>[],
    ): void {
        if (viewRef.length < 1) return;
        let componentRef = componentRefs.filter(x => x.instance.unique_key === ind)[0];
        let vcrIndex: number = viewRef.indexOf(componentRef.hostView);
        viewRef.remove(vcrIndex);
        componentRefs = componentRefs.filter(x => x.instance.unique_key !== ind);
    }
}
