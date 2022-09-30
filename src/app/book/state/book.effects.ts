import { BookService } from './../book.service';
import { BookActions } from './book.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from 'rxjs';
import { Book } from '../book'


@Injectable()
export class BookEffects {
    constructor(private actions$ : Actions, private bookService: BookService) {}
    
    getBooks = createEffect(() => {
        return this.actions$.pipe(
            ofType(BookActions.GET_BOOK_LIST),
            mergeMap(() => 
                this.bookService.getBooks().pipe(
                    map((books) => ({type: BookActions.SET_BOOK_LIST, books}))
                )
            )
        )
    })

    addBook = createEffect(() => {
        return this.actions$.pipe(
            ofType(BookActions.ADD_BOOK_API),
            mergeMap((data: {type:string, payload:Book}) => {
                return this.bookService.addBook(data.payload).pipe(
                    map((book) => ({type: BookActions.ADD_BOOK, book}))
                )
            })
        )
    })
}