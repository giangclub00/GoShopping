import { Injectable } from '@angular/core';

@Injectable()
export class ModalUserManagementService {
  public modalEditUserFunc: Function;
  public modalRemoveUserFunc: Function;
  constructor() {}

  showModalEditUserHandler(context, modalEditUserHandler: Function) {
    this.modalEditUserFunc = modalEditUserHandler;
    this.modalEditUserFunc = this.modalEditUserFunc.bind(context);
  }

  showModalRemoveUserHandler(context, modalRemoveUserHandler: Function) {
    this.modalRemoveUserFunc = modalRemoveUserHandler;
    this.modalRemoveUserFunc = this.modalRemoveUserFunc.bind(context);
  }
}
