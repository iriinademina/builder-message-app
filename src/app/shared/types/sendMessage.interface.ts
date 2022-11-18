export interface SendMessageItem {
    type: string;
    widgetContent: SendMessageTextItem | SendMessageImageItem | SendMessageCardItem;
    uuid?: string;
}

export interface SendMessageButtonItem {
    nameButton: string;
    uuid: string;
}

export interface SendMessageTextItem {
    text: string;
    buttons: SendMessageButtonItem[];
    uuid?: string;
}

export interface SendMessageImageItem {
    imgSrc: string;
    buttons: SendMessageButtonItem[];
    uuid?: string;
}

export interface SendMessageCardItem {
    cardItems: CardItem[];
    uuid?: string;
}

export interface CardItem {
    imgSrc: string;
    title: string;
    subtitle: string;
    buttons: SendMessageButtonItem[];
    uuid?: string;
}
