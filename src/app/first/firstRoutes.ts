import { Routes } from "@angular/router";
import { FirstLinkOneComponent } from "./first-link-one/first-link-one.component";
import { FirstLinkTwoComponent } from "./first-link-two/first-link-two.component";

export let routes: Routes = [
    { path: 'one', component: FirstLinkOneComponent },
    { path: 'two', component: FirstLinkTwoComponent }
];