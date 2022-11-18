import { IRandomItem, IRandomizer } from '../types';
import { v4 as uuidv4 } from 'uuid';

export class Randomizer implements IRandomizer {
    randomizerData?: IRandomItem[];

    constructor(data?: IRandomizer) {
        this.randomizerData = data && data.randomizerData ? data.randomizerData : [];
    }
}

export class RandomItem implements IRandomItem {
    value: number;
    randomLetter: string;
    nextStep: string | null;
    uuid: string;

    constructor(dataItem?: IRandomItem) {
        this.uuid = (dataItem && dataItem.uuid) || uuidv4();
        this.value = dataItem && dataItem.value ? dataItem.value : 50;
        this.randomLetter = dataItem && dataItem.randomLetter ? dataItem.randomLetter : 'A';
        this.nextStep = dataItem && dataItem.nextStep ? dataItem.nextStep : null;
    }
}
