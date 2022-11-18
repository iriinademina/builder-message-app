import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { BuilderMessageService } from 'src/app/shared/services/builder-message.service';
import { BuilderMessageComponent } from 'src/app/components/builder-message/builder-message.component';
import { BuilderItemsEnum, OpenedSidebar } from 'src/app/shared/types';
import { Store, select } from '@ngrx/store';
import { Observable, of, switchMap, map, every } from 'rxjs';
import { isOpenedSidebarSelector } from 'src/app/store/selectors';
import { deleteBuilderMessageItemAction, openSidebarAction } from 'src/app/store/actions';

@Component({
    selector: 'app-send-message',
    templateUrl: './send-message.component.html',
    styleUrls: ['./send-message.component.scss'],
})
export class SendMessageComponent implements OnInit {
    @Input() dataItem: any;
    typeOfItem: string;

    constructor(private builderMessageService: BuilderMessageService, private elem: ElementRef, private store: Store) {
        this.typeOfItem = BuilderItemsEnum.SendMessage;
    }

    ngOnInit(): void {
        this.initialValues();
    }

    removeItem(): void {
        console.log('deleted', this.dataItem.uuid);
        this.store.dispatch(deleteBuilderMessageItemAction({ key_uuid: this.dataItem.uuid }));
    }

    initialValues(): void {}

    openSidebarItems(event: Event): void {
        event.stopPropagation();

        this.store.dispatch(
            openSidebarAction({
                dataSidebar: {
                    isOpened: true,
                    uuidActiveItem: this.dataItem.uuid,
                    type: this.typeOfItem,
                },
            })
        );
    }
}
