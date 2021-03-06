import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { selectBookCollection, selectBooks } from "./state/books.selectors";
import {
  SuccessRetrievedBookList,
  addBook,
  removeBook
} from "./state/books.actions";
import * as BookActions from "./state/books.actions";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(BookActions.BeginGetBookListAction());
  }
}
