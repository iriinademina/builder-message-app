import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of, switchMap } from 'rxjs';
import { SendMessageItemsEnum } from 'src/app/shared/types/sendMessageItemsTypes';
import { SendMessageItem } from 'src/app/shared/types';

@Component({
    selector: 'app-send-message-child',
    templateUrl: './send-message-child.component.html',
    styleUrls: ['./send-message-child.component.scss'],
})
export class SendMessageChildComponent implements OnInit {
    @Input() widgetItems: SendMessageItem[];

    constructor(private store: Store) {}

    ngOnInit(): void {
        console.log('type send-message-child', this.widgetItems);
    }
}
