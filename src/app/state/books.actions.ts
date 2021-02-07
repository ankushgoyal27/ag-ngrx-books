import { createAction, props } from "@ngrx/store";

export const GetBookList = createAction("[Book List/API] Get Book");

export const addBook = createAction(
  "[Book List] Add Book",
  props<{ bookId }>()
);

export const BeginGetBookListAction = createAction(
  "[Book List/API] - Begin Get Book"
);

export const removeBook = createAction(
  "[Book Collection] Remove Book",
  props<{ bookId }>()
);

export const SuccessRetrievedBookList = createAction(
  "[Book List/API] Retrieve Books Success",
  props<{ Book }>()
);
