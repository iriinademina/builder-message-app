import { Component, OnInit, Input } from '@angular/core';
import { SendMessageItemsComponent } from 'src/app/components/sidebar/send-message-items/send-message-items/send-message-items.component';

@Component({
    selector: 'app-send-message-image',
    templateUrl: './send-message-image.component.html',
    styleUrls: ['./send-message-image.component.scss'],
})
export class SendMessageImageComponent implements OnInit {
    @Input() unique_key: number;
    @Input() parentRef: SendMessageItemsComponent;

    constructor() {}

    ngOnInit(): void {}

    removeItem(): void {
        console.log(this.unique_key);
        this.parentRef.removeDynamicComponent(this.unique_key);
    }

    cloneItem(): void {
        this.parentRef.cloneDynamicComponent(this.unique_key);
    }
}
