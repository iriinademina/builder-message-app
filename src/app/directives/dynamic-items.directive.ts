import { Directive } from '@angular/core';
import { ComponentRef, Input, OnChanges, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { SendMessageComponent } from 'src/app/components/send-message-item-type/send-message/send-message.component';
import { RandomizerComponent } from 'src/app/components/randomizer/randomizer.component';
import { BuilderMessageItem } from 'src/app/shared/models/builderMessageItem';
import { BuilderMessageService } from 'src/app/shared/services/builder-message.service';
import { BuilderItemsEnum } from 'src/app/shared/types/builderItemsTypes';

@Directive({
    selector: '[appDynamicItems]',
})
export class DynamicItemsDirective {
    @Input() dataItem: BuilderMessageItem;

    private component: ComponentRef<any>;

    constructor(
        private readonly viewRef: ViewContainerRef,
        private readonly renderer: Renderer2,
        private builderMessageService: BuilderMessageService
    ) {}

    ngOnChanges() {
        if (this.component) {
            this.component.setInput('dataItem', this.dataItem);
        }
    }

    ngOnInit() {
        this.addDynamicComponent(this.dataItem.typeOfWidget);
    }

    addDynamicComponent(type: string): void {
        console.log(type);
        if (type === BuilderItemsEnum.SendMessage) {
            this.component = this.builderMessageService.addDynamicComponent(
                this.viewRef,
                SendMessageComponent,
                this.dataItem
            );
        }
        if (type === BuilderItemsEnum.Randomizer) {
            this.component = this.builderMessageService.addDynamicComponent(
                this.viewRef,
                RandomizerComponent,
                this.dataItem
            );
        }
    }
}
