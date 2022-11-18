import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { createBuilderMessageItemAction, openSidebarAction } from 'src/app/store/actions';
import { BuilderMessageItem } from 'src/app/shared/models/builderMessageItem';
import { OpenedSidebar } from 'src/app/shared/types';
import { builderMessageItemsSelector, isOpenedSidebarSelector } from 'src/app/store/selectors';

@Component({
    selector: 'app-builder-message',
    templateUrl: './builder-message.component.html',
    styleUrls: ['./builder-message.component.scss'],
})
export class BuilderMessageComponent implements OnInit {
    builderMessageItems$: Observable<BuilderMessageItem[]>;
    openedSidebarData$: Observable<OpenedSidebar>;
    isOpen: boolean;

    constructor( private store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(createBuilderMessageItemAction({ dataItem: new BuilderMessageItem() }));
        this.initialValues();
    }

    initialValues(): void {
        this.builderMessageItems$ = this.store.pipe(select(builderMessageItemsSelector));
        this.store.pipe(select(isOpenedSidebarSelector)).subscribe(data => {
            this.isOpen = data.isOpened;
        });
    }

    closeSidebar(): void {
        if (this.isOpen) {
            this.store.dispatch(
                openSidebarAction({
                    dataSidebar: {
                        isOpened: false,
                    },
                })
            );
        }
    }
}
