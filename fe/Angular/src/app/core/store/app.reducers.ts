import { ActionReducerMap } from '@ngrx/store';

import * as fromCoreReducer from 'src/core/store/core.reducers';
import * as fromRouter from '@ngrx/router-store';

export interface AppState {
  router: fromRouter.RouterReducerState;
  app: fromCoreReducer.State;
}

export const appReducer: ActionReducerMap<AppState>  = {
  router: fromRouter.routerReducer,
  app: fromCoreReducer.coreReducer,
};
