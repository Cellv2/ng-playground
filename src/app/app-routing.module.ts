import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

import { JsonPlaceholderTestComponent } from "./json-placeholder-test/json-placeholder-test.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RandomPageComponent } from "./random-page/random-page.component";

const routes: Routes = [
    { path: "random-page", component: RandomPageComponent },
    { path: "json-placeholder", component: JsonPlaceholderTestComponent },
    { path: "", pathMatch: "full", component: AppComponent },
    { path: "**", component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
