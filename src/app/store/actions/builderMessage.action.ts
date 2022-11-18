import { createAction, props } from '@ngrx/store';
import { BuilderMessageTypes } from '../types';
import { BuilderMessageItem } from 'src/app/shared/models/builderMessageItem';
import { Randomizer } from 'src/app/shared/models/randomizer';
import { IBuilderMessageItem, IRandomizer } from 'src/app/shared/types';

export const getBuilderMessageItemsAction = createAction(BuilderMessageTypes.GET_BUILDER_MESSAGE_ITEMS);

export const createBuilderMessageItemAction = createAction(
    BuilderMessageTypes.CREATE_BUILDER_MESSAGE_ITEM,
    props<{ dataItem: BuilderMessageItem }>()
);

export const deleteBuilderMessageItemAction = createAction(
    BuilderMessageTypes.DELETE_BUILDER_MESSAGE_ITEM,
    props<{ key_uuid: string }>()
);

export const openSidebarAction = createAction(
    BuilderMessageTypes.OPEN_SIDEBAR,
    props<{ dataSidebar: { isOpened: boolean, uuidActiveItem?: string, type?: string }}>()
);




