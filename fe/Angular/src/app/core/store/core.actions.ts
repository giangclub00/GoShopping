import { Action } from '@ngrx/store';

export const REMEMBER_URL = '[CORE] REMEMBER_URL';
export class RememberUrlAction implements Action {
  readonly type = REMEMBER_URL;
  constructor(public path: string) {}
}

export const APPLY_AUTH = '[CORE] APPLY_AUTH';
export class ApplyAuthAction implements Action {
  readonly type = APPLY_AUTH;
  constructor(public payload: any) {}
}
export const REFRESH_TOKEN = '[CORE] REFRESH_TOKEN';

