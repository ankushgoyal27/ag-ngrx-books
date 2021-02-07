import { createReducer, on, Action } from "@ngrx/store";

import { SuccessRetrievedBookList } from "./books.actions";
import { Book } from "../book-list/books.model";

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(SuccessRetrievedBookList, (state, { Book }) => [...Book])
);
