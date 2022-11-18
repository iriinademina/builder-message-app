import { Component, OnInit, Input } from '@angular/core';
import { IRandomizer } from 'src/app/shared/types';

@Component({
    selector: 'app-randomizer-child',
    templateUrl: './randomizer-child.component.html',
    styleUrls: ['./randomizer-child.component.scss'],
})
export class RandomizerChildComponent implements OnInit {
    @Input() randomizerItemData: IRandomizer;

    constructor() {}

    ngOnInit(): void {
        console.log('random data', this.randomizerItemData);
    }
}
