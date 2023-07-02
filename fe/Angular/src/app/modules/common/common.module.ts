import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExternalModules } from '../../moduleRegister/moduleRegister.external-modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ...ExternalModules,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
  ],
  providers: [],
  exports: [
  ]
})
export class AppCommonModule {}
