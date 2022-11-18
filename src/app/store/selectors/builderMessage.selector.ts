import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BuilderMessageStateInterface } from '../reducers/builderMessage.reducer';
import { BuilderItemsEnum } from 'src/app/shared/types/builderItemsTypes';
import { SendMessageItem } from 'src/app/shared/types';

export const builderMessageItemsFeatureSelector =
    createFeatureSelector<BuilderMessageStateInterface>('builderMessageReducer');

export const builderMessageItemsSelector = createSelector(
    builderMessageItemsFeatureSelector,
    (builderMessageState: BuilderMessageStateInterface) => builderMessageState.itemsList
);

export const randomizerItemsSelector = createSelector(
    builderMessageItemsFeatureSelector,
    (builderMessageState: BuilderMessageStateInterface) =>
        builderMessageState.itemsList.filter(items => items.typeOfWidget === BuilderItemsEnum.Randomizer)
);

export const sendMessageItemByIdSelector = createSelector(
    builderMessageItemsFeatureSelector,
    (builderMessageState: BuilderMessageStateInterface) =>
        builderMessageState.itemsList.filter(
            items =>
                items.typeOfWidget === BuilderItemsEnum.SendMessage &&
                items.uuid === builderMessageState.openedSidebar.uuidActiveItem
        )[0]
);

export const isOpenedSidebarSelector = createSelector(
    builderMessageItemsFeatureSelector,
    (builderMessageState: BuilderMessageStateInterface) => builderMessageState.openedSidebar
);
