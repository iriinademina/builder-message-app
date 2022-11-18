import { ActionReducerMap } from '@ngrx/store';
import * as fromBuilderMessage from './builderMessage.reducer';

export interface RootState {
    builderMessageReducer: fromBuilderMessage.BuilderMessageStateInterface;
}

export const reducers: ActionReducerMap<RootState> = {
    builderMessageReducer: fromBuilderMessage.reducer,
};
