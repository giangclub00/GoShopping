import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/core/store/app.reducers';
import { NavigateTo } from 'src/core/store/router.actions';
import { RememberUrlAction, ApplyAuthAction } from 'src/core/store/core.actions';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  private isUserInfoLoaded: boolean;
  constructor(private store: Store<AppState>) {
    this.isUserInfoLoaded = false;
  }

  canActivate() {
    const validToken = this.isTokenValid();
    if (!validToken) {
      this.navigateToLogin();
      return false;
    }

    this.updateUserInfoStore();
    return validToken;
  }

  private isTokenValid(): boolean {
    const auth_token = localStorage.getItem('auth-token');
    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(auth_token);
    return !isExpired;
  }

  navigateToLogin() {
    this.store.select(x => x.router.state.url).subscribe(x => {
      this.store.dispatch(new RememberUrlAction(x));
      this.store.dispatch(new NavigateTo({ path: ['/login'] }));
    }).unsubscribe();
  }

  updateUserInfoStore() {
    if (!this.isUserInfoLoaded) {
      const identityDataJson = localStorage.getItem('identity-data');
      if (identityDataJson) {
        const identityData = JSON.parse(identityDataJson);
        this.store.dispatch(new ApplyAuthAction(identityData));
      }
    }

    this.isUserInfoLoaded = true;
  }
}
