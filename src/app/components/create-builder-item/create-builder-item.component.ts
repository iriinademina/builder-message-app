import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BuilderMessageService } from 'src/app/shared/services/builder-message.service';
import { BuilderItemsEnum } from 'src/app/shared/types/builderItemsTypes';
import { Store, select } from '@ngrx/store';
import { Observable, of, switchMap, map } from 'rxjs';
import { createBuilderMessageItemAction } from 'src/app/store/actions';
import { BuilderMessageItem } from 'src/app/shared/models/builderMessageItem';
import { Randomizer, RandomItem } from 'src/app/shared/models/randomizer';
import { IRandomizer } from 'src/app/shared/types';

@Component({
    selector: 'app-create-builder-item',
    templateUrl: './create-builder-item.component.html',
    styleUrls: ['./create-builder-item.component.scss'],
})
export class CreateBuilderItemComponent implements OnInit {
    isOpen: boolean;
    typeOfItem: BuilderItemsEnum;

    constructor(private store: Store) {
        this.isOpen = false;
    }

    ngOnInit(): void {}

    toogleList(): void {
        this.isOpen = !this.isOpen;
    }

    createSendMessageItem(): void {
        this.store.dispatch(createBuilderMessageItemAction({ dataItem: new BuilderMessageItem() }));
    }

    createRandomizerItem(): void {
        const typeOfItem = BuilderItemsEnum.Randomizer;

        const defaultRandomItems = [
            new RandomItem(),
            new RandomItem({
                randomLetter: 'B',
            }),
        ];

        this.store.dispatch(
            createBuilderMessageItemAction({
                dataItem: new BuilderMessageItem({
                    typeOfWidget: typeOfItem,
                    widgetItems: [new Randomizer({ randomizerData: defaultRandomItems })],
                }),
            })
        );
    }
}
