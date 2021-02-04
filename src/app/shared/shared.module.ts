
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '../shared/angular-material.module';


@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      FlexLayoutModule,
      AngularMaterialModule
  ],
  exports: [
      FlexLayoutModule,
      AngularMaterialModule
  ]
})
export class SharedModule { }