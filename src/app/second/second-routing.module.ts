import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './secondRoutes';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule { }
