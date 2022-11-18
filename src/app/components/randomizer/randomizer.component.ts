import { Component, OnInit, Input } from '@angular/core';
import { BuilderMessageService } from 'src/app/shared/services/builder-message.service';
import { Store, select } from '@ngrx/store';
import { Observable, of, switchMap, map, every } from 'rxjs';
import { deleteBuilderMessageItemAction } from 'src/app/store/actions';
import { BuilderMessageItem } from 'src/app/shared/models/builderMessageItem';
import { randomizerItemsSelector } from 'src/app/store/selectors';

@Component({
    selector: 'app-randomizer',
    templateUrl: './randomizer.component.html',
    styleUrls: ['./randomizer.component.scss'],
})
export class RandomizerComponent implements OnInit {
    @Input() dataItem: any;

    constructor(private builderMessageService: BuilderMessageService, private store: Store) {}

    ngOnInit(): void {}

    removeItem(): void {
        this.store.dispatch(deleteBuilderMessageItemAction({ key_uuid: this.dataItem.uuid }));
    }
}
