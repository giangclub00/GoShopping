
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Actions, Effect } from '@ngrx/effects';
import { map, switchMap, combineLatest, tap } from 'rxjs/operators';
import { REFRESH_TOKEN, ApplyAuthAction } from './core.actions';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../consts';

@Injectable()
export class CoreEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private http: HttpClient
  ) {}

  @Effect({ dispatch: true })
  refreshToken$ = this.actions$
    .ofType(REFRESH_TOKEN)
    .pipe(
      combineLatest(this.store.select(x => x.app.identity.authToken)),
      switchMap(([action, authToken]) =>
        this.http.get(`${API_URL}/accounts/refresh-token?auth-token=${authToken}`).pipe(
          tap((x: any) => {
            localStorage.setItem('identity-data', JSON.stringify(x));
            localStorage.setItem('auth-token', x.identity.authToken);
          }),
          map(x => new ApplyAuthAction(x))
        )
    ));
}
