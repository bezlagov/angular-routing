import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { SecondLinkOneComponent } from './second-link-one/second-link-one.component';
import { SecondLinkTwoComponent } from './second-link-two/second-link-two.component';


@NgModule({
  declarations: [
    SecondLinkOneComponent,
    SecondLinkTwoComponent
  ],
  imports: [
    CommonModule,
    SecondRoutingModule
  ]
})
export class SecondModule { }
