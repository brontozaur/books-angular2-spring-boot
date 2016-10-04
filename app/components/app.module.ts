import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

import {BooksManagerComponent} from "./books.manager.component";
import {Editura} from "./editura/editura";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule],
    declarations: [BooksManagerComponent, Editura],
    bootstrap: [BooksManagerComponent],
})
export class AppModule {
}