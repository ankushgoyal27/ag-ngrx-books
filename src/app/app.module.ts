import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { booksReducer } from "./state/books.reducer";
import { collectionReducer } from "./state/collection.reducer";
import { HttpClientModule } from "@angular/common/http";
import { BookCollectionComponent } from "./book-collection/book-collection.component";
import { BookListComponent } from "./book-list/book-list.component";
import { EffectsModule } from "@ngrx/effects";
import { BooksEffect } from "./effects/books.effect";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      books: booksReducer,
      collection: collectionReducer
    }),
    EffectsModule.forRoot([BooksEffect]),
    HttpClientModule
  ],
  declarations: [AppComponent, BookListComponent, BookCollectionComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
