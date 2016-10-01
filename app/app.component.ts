import {Component} from "@angular/core";

@Component({
    selector: 'books-app',
    templateUrl: 'app/app.component.html'
    // template: "Hello {{title}}"
})
export class AppComponent {

    title: string = 'Books on angular 2!';
}