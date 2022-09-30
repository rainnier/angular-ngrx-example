import { selectBook, selectBooks } from './../../state/book.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(private store:Store) { }

  books$ = this.store.select(selectBooks())
  ngOnInit(): void {
    this.books$.subscribe(data => console.log(data))
  }

}
