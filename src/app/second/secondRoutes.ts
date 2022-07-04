import { Routes, RouterModule } from "@angular/router";
import { SecondLinkOneComponent } from "./second-link-one/second-link-one.component";
import { SecondLinkTwoComponent } from "./second-link-two/second-link-two.component";

export let routes:Routes = [
    { path: 'three', component: SecondLinkOneComponent },
    { path: 'four', component: SecondLinkTwoComponent }
];