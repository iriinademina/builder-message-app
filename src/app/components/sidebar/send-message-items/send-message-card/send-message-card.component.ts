import { Component, OnInit, Input } from '@angular/core';
import { SendMessageItemsComponent } from 'src/app/components/sidebar/send-message-items/send-message-items/send-message-items.component';

@Component({
    selector: 'app-send-message-card',
    templateUrl: './send-message-card.component.html',
    styleUrls: ['./send-message-card.component.scss'],
})
export class SendMessageCardComponent implements OnInit {
    @Input() unique_key: number;
    @Input() parentRef: SendMessageItemsComponent;

    constructor() {}

    ngOnInit(): void {}

    removeItem(): void {
        console.log(this.unique_key);
        this.parentRef.removeDynamicComponent(this.unique_key);
    }
}
