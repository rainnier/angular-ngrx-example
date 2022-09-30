import { setBookList, addBookState, updateBookState, deleteBookState } from './book.actions';
import { createReducer, on } from '@ngrx/store';
import { Book } from './../book';
import { state } from '@angular/animations';

export interface BookState {
    books: ReadonlyArray<Book>
}



// ...state, pens, chairs


export const initialState:BookState = {
    books:[]
}

export const bookReducer = createReducer(
    initialState,
    on(setBookList, (state, {books}) => {
        return {...state, books}
    }),
    on(addBookState, (state, {book}) => {
        return {...state, books:[...state.books, book]}
    } ),
    on(updateBookState, (state, {book}) => {
        return {...state, books:state.books.map(
            b => b.id === book.id ? book : b
        )}
    }),
    on(deleteBookState, (state, {bookId}) => {
        return {...state, books:state.books.filter(
            b => b.id !== bookId
        )}
    })
)