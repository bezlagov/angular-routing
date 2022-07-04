import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLinkOneComponent } from './first-link-one/first-link-one.component';
import { FirstLinkTwoComponent } from './first-link-two/first-link-two.component';
import { FirstRoutingModule } from './first-routing.module';


@NgModule({
  declarations: [
    FirstLinkOneComponent,
    FirstLinkTwoComponent
  ],
  imports: [
    CommonModule,
    FirstRoutingModule,
  ]
})
export class FirstModule { }
