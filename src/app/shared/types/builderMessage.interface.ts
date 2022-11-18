import { SendMessageItem, IRandomizer } from '../types';

export interface IBuilderMessageItem {
    typeOfWidget: string;
    widgetItems: SendMessageItem[] | IRandomizer[];
    uuid?: string;
}
