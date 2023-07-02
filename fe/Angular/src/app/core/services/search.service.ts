import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  public searchFunc: Function;
  constructor() {}

  setSearchHandler(context, searchHandler: Function) {
    this.searchFunc = searchHandler;
    this.searchFunc = this.searchFunc.bind(context);
  }
}
