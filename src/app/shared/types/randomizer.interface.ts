export interface IRandomizer {
    randomizerData?: IRandomItem[];
    uuid?: string;
}

export interface IRandomItem {
    value?: number;
    randomLetter?: string;
    nextStep?: string | null;
    uuid?: string;
}
