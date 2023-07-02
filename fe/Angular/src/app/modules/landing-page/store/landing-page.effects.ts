// import { Injectable } from '@angular/core';
// import { Effect, Actions } from '@ngrx/effects';

// import { LandingPageApi } from '../services/landing-page.api';
// import * as LandingPageActions from '../store/landing-page.actions';
// import { switchMap, mergeMap, catchError, tap, withLatestFrom } from 'rxjs/operators';
// import { base64toBlob } from 'src/core/helpers/data.helper';
// import {saveAs as importedSaveAs} from 'file-saver';
// import * as moment from 'moment';
// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
// import { Store } from '@ngrx/store';
// import { AppState } from 'src/core/store/app.reducers';
// import { API_URL } from 'src/core/consts';

// @Injectable()
// export class LandingPageEffects {
//   constructor(private actions$: Actions, private store: Store<AppState>, private landingPageApi: LandingPageApi, private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {}

//   @Effect({ dispatch: true })
//   loadData$ = this.actions$.ofType(LandingPageActions.LOAD_DATA).pipe(
//     tap(() => this.ng4LoadingSpinnerService.show()),
//     switchMap(() =>
//       this.landingPageApi.loadData().pipe(
//         mergeMap(res => [new LandingPageActions.LoadDataSuccessAction(res)]),
//         tap(() => this.ng4LoadingSpinnerService.hide()),
//         // catchError(error => this.handleError(error))
//       )
//     )
//   );

//   @Effect({ dispatch: false })
//   doDownload$ = this.actions$.ofType(LandingPageActions.DOWNLOAD).pipe(
//     withLatestFrom(this.store.select(x => x.app.identity.authToken)),
//     tap(([action, authToken]) => {
//       window.open(`${API_URL}/landing-page/export-to-excel?auth-token=${authToken}`);
//     })
//   );
// }
