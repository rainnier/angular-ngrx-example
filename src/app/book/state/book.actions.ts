import { createAction, props } from '@ngrx/store';
import { Book } from './../book';

// CRUD
// GET ADD DELETE UPDATE
export enum BookActions {
    GET_BOOK_LIST = "[Book] Get List of Books",
    SET_BOOK_LIST = "[Book] Set List of Books",
    ADD_BOOK = "[Book] Add a Book",
    ADD_BOOK_API = "[Book] Add a Book with API",
    UPDATE_BOOK = "[Book] Update a Book",
    DELETE_BOOK = "[Book] Delete a Book"
}

export const getBookList = createAction(
    BookActions.GET_BOOK_LIST
)

export const setBookList = createAction(
    BookActions.SET_BOOK_LIST,
    props<{books:ReadonlyArray<Book>}>()
)

export const addBookState = createAction(
    BookActions.ADD_BOOK,
    props<{book:Book}>()
)

export const updateBookState = createAction(
    BookActions.UPDATE_BOOK,
    props<{book:Book}>()
)

export const deleteBookState = createAction(
    BookActions.DELETE_BOOK,
    props<{bookId:number}>()
)