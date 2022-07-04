import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',
  loadChildren:()=>import("./first/first.module").then(mod=>mod.FirstModule)
  },
  {path:'',
  loadChildren:()=>import("./second/second.module").then(mod=>mod.SecondModule)
  }
];

@NgModule({
  // data in RouterModule.forRoot is for lazy loading for task2
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
