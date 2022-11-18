import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { BuilderMessageService } from 'src/app/shared/services/builder-message.service';
import { BuilderItemsEnum, OpenedSidebar } from 'src/app/shared/types';
import { openSidebarAction } from 'src/app/store/actions';
import { Store, select } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { isOpenedSidebarSelector } from 'src/app/store/selectors';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, AfterViewInit {
    @ViewChild('sidebar') sidebar: ElementRef;
    isOpen: boolean;
    isEmpty: string;

    openedSidebarData$: Observable<OpenedSidebar>;

    constructor(private builderMessageService: BuilderMessageService, private store: Store) {
        this.isEmpty = 'Empty';
    }

    ngOnInit(): void {
        this.initialValues();
    }

    ngAfterViewInit(): void {}

    initialValues(): void {
        this.openedSidebarData$ = this.store.pipe(select(isOpenedSidebarSelector)).pipe(
            tap(data => {
                this.isOpen = data.isOpened;
            })
        );
    }

    toggleMenu() {
        this.isOpen = !this.isOpen;
        this.sendOpenedSidebar(this.isOpen);
    }

    sendOpenedSidebar(isOpen: boolean): void {
        this.store.dispatch(
            openSidebarAction({
                dataSidebar: {
                    isOpened: isOpen,
                    type: this.isEmpty,
                },
            })
        );
    }
}
