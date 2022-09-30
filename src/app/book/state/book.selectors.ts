import { BookState } from './book.reducers';
import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";

export const selectBookState = createFeatureSelector<BookState>('bookStage') 

export const selectBooks = () => createSelector(
    selectBookState,
    (state:BookState) => state.books
)

export const selectBook = (id:number) => createSelector(
    selectBookState,
    (state:BookState) => state.books.find(b => b.id === id)
)