import { createReducer, on, Action } from '@ngrx/store';
import { BuilderMessageItem } from 'src/app/shared/models/builderMessageItem';
import {
    createBuilderMessageItemAction,
    deleteBuilderMessageItemAction,
    openSidebarAction,
    createSendMessageItemAction,
    deleteSendMessageItemAction,
} from '../actions';
import { OpenedSidebar } from 'src/app/shared/types';
import { SendMessage } from 'src/app/shared/models/sendMessage';
import { SendMessageItem } from 'src/app/shared/types';

export interface BuilderMessageStateInterface {
    itemsList: BuilderMessageItem[];
    openedSidebar: OpenedSidebar;
}

const initialState: BuilderMessageStateInterface = {
    itemsList: [],

    openedSidebar: {
        isOpened: false,
        uuidActiveItem: '',
        type: '',
    },
};

const builderMessageReducer = createReducer(
    initialState,
    on(
        createBuilderMessageItemAction,
        (state, action): BuilderMessageStateInterface => ({
            ...state,
            itemsList: [...state.itemsList, action.dataItem],
        })
    ),

    on(
        deleteBuilderMessageItemAction,
        (state, action): BuilderMessageStateInterface => ({
            ...state,
            itemsList: state.itemsList.filter((item, index) => {
                return item.uuid !== action.key_uuid;
            }),
        })
    ),

    on(
        openSidebarAction,
        (state, action): BuilderMessageStateInterface => ({
            ...state,
            openedSidebar: action.dataSidebar,
        })
    ),

    //send meassage

    on(createSendMessageItemAction, (state, action): BuilderMessageStateInterface => {
        const { key_uuid: uuid, dataItem } = action;

        let ind: number = [...state.itemsList].findIndex(i => i.uuid === uuid);
        return {
            ...state,
            itemsList: state.itemsList.map((item: BuilderMessageItem, index) =>
                index === ind
                    ? {
                          ...item,
                          widgetItems: [...item.widgetItems, dataItem] as SendMessageItem[],
                      }
                    : item
            ),
        };
    }),
);

export function reducer(state: BuilderMessageStateInterface | undefined, action: Action) {
    return builderMessageReducer(state, action);
}
