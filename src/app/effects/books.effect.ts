import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { GoogleBooksService } from "../book-list/books.service";
import * as BookActions from "../state/books.actions";

@Injectable()
export class BooksEffect {
  GetBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.BeginGetBookListAction),
      mergeMap(() =>
        this.booksService.getBooks().pipe(
          map(books => {
            return BookActions.SuccessRetrievedBookList({ Book: books });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private booksService: GoogleBooksService
  ) {}
}
