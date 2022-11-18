import { createAction, props } from '@ngrx/store';
import { SendMessageTypes } from '../types';
import { SendMessage, SendMessageImage } from 'src/app/shared/models/sendMessage';
import { Randomizer } from 'src/app/shared/models/randomizer';
import { IRandomizer, SendMessageItem } from 'src/app/shared/types';

export const createSendMessageItemAction = createAction(
    SendMessageTypes.CREATE_SEND_MESSAGE_ITEM,
    props<{ dataItem: SendMessageItem; key_uuid: string }>()
);

export const deleteSendMessageItemAction = createAction(
    SendMessageTypes.DELETE_SEND_MESSAGE_ITEM,
    props<{ key_uuid: string | undefined }>()
);
