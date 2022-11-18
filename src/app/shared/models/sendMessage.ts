import { SendMessageItem } from '../types';
import {
    SendMessageTextItem,
    SendMessageImageItem,
    SendMessageCardItem,
    SendMessageButtonItem,
    CardItem,
} from '../types/sendMessage.interface';
import { SendMessageItemsEnum, BuilderItemsEnum } from '../types';

import { v4 as uuidv4 } from 'uuid';

export class SendMessage implements SendMessageItem {
    type: string;
    uuid: string;
    widgetContent: SendMessageTextItem | SendMessageImageItem | SendMessageCardItem;

    constructor(dataSendMessage?: SendMessageItem) {
        (this.type = (dataSendMessage && dataSendMessage.type) || SendMessageItemsEnum.Text), (this.uuid = uuidv4());
        this.widgetContent = (dataSendMessage && dataSendMessage.widgetContent) || new SendMessageText();
    }
}

export class SendMessageText implements SendMessageTextItem {
    text: string;
    buttons: SendMessageButtonItem[];

    constructor(data?: SendMessageTextItem) {
        this.text = (data && data.text) || '';
        this.buttons = (data && data.buttons) || [];
    }
}

export class SendMessageImage implements SendMessageImageItem {

    imgSrc: string;
    buttons: SendMessageButtonItem[]; 
    uuid?: string;

    constructor( data?: SendMessageImageItem) {
        this.imgSrc = (data && data.imgSrc) || '';
        this.buttons = (data && data.buttons) || [];
    }
}

export class SendMessageCard implements SendMessageCardItem {

    cardItems: CardItem[];
    uuid: string;

    constructor(data?: SendMessageCardItem) {
        this.cardItems = (data && data.cardItems) || [new Card()];
    }
}

export class Card implements CardItem {

    imgSrc: string;
    title: string;
    subtitle: string;
    buttons: SendMessageButtonItem[];
    uuid: string

    constructor( data?: CardItem) {
        this.imgSrc = (data && data.imgSrc) || '';
        this.title = (data && data.title) || '';
        this.subtitle = (data && data.subtitle) || '';
        this.buttons = (data && data.buttons) || [];
    }
}
