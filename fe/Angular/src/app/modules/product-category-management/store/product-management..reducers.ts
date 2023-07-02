// import { ModuleWithProviders } from '@angular/core';
// import { AppState } from 'src/core/store/app.reducers';
// import { createFeatureSelector, createSelector, Store, StoreModule } from '@ngrx/store';
// import { Observable } from 'rxjs';

// import * as LandingPageActions from './landing-page.actions';
// import { DataUpdateStatusItem, ActionRequiredEquipment, StatsItem, OverallItem, PerformanceReport } from './landing-page.models';

// export interface State {
//   overallStatusInYear: OverallItem[];
//   overallStatusByRegionInMonth: StatsItem[];
//   performanceReportInMonth: PerformanceReport;
//   dataUpdateStatus: DataUpdateStatusItem[];
//   mostActionRequiredEquipmentInYear: ActionRequiredEquipment[];
//   reportInMonth: string;
//   dataLoaded: number;
// }

// const initialState: State = {
//   overallStatusByRegionInMonth: [],
//   performanceReportInMonth: null,
//   dataUpdateStatus: [],
//   mostActionRequiredEquipmentInYear: [],
//   overallStatusInYear: [],
//   reportInMonth: '',
//   dataLoaded: 0
// };

// export function getFeatureStore(): ModuleWithProviders {
//   return StoreModule.forFeature('landingPage', landingPageReducer);
// }

// export function landingPageSelect<Result>(store: Store<AppState>, projector: (S1: State) => Result): Observable<Result> {
//   return store.select(createSelector(createFeatureSelector<State>('landingPage'), projector));
// }

// export function landingPageReducer(state = initialState, action): State {
//   if (action.type === LandingPageActions.LOAD_DATA_SUCCESS) {
//     state.dataLoaded++;
//     return { ...state, ...action.payload };
//   }

//   switch (action.type) {
//     default: {
//       return state;
//     }
//   }
// }
