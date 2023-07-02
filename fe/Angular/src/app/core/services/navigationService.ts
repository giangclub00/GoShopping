import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/core/store/app.reducers';
import { NavigateTo } from 'src/core/store/router.actions';
import { withQuery } from '../helpers/http.helper';

@Injectable()
export class NavigationService {
  constructor(private store: Store<AppState>) { }

  navigateTo(path: string) {
    this.store.dispatch(this.getNavigateAction(path));
  }

  navigateToPathWithQuery(path: string, query: any) {
    if (!query || Object.keys(query).length === 0) {
      window.open(path);
      return;
    }

    window.open(path + '?' + withQuery(query));
  }

  getNavigateAction(path, query = null) {
    return new NavigateTo({ path: [path], query });
  }

  getQueryParams() {

  }
}
