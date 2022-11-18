import { IBuilderMessageItem } from '../types';
import { SendMessageItem, IRandomizer } from '../types';
import { SendMessage } from './sendMessage';
import { v4 as uuidv4 } from 'uuid';
import { BuilderItemsEnum } from '../types';

export class BuilderMessageItem implements IBuilderMessageItem {
    typeOfWidget: string;
    widgetItems: SendMessageItem[] | IRandomizer[];
    uuid: string;

    constructor(dataItem?: IBuilderMessageItem) {
        this.typeOfWidget = (dataItem && dataItem.typeOfWidget) || BuilderItemsEnum.SendMessage;
        this.widgetItems = (dataItem && dataItem?.widgetItems) || [new SendMessage()];
        this.uuid = (dataItem && dataItem.uuid) || uuidv4();
    }
}
