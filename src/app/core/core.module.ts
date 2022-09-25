import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordDirective } from './shared/validators/password.directive';



@NgModule({
  declarations: [
    PasswordDirective
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
