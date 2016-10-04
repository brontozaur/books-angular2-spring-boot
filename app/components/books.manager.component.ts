import {Component} from "@angular/core";

@Component({
    selector: 'books-app',
    templateUrl: '/app/components/books.manager.component.html'
})
export class BooksManagerComponent {

    title: string = 'Books on angular 2!';
}