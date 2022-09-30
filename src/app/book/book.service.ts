import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  env = "http://localhost:3000"

  getBooks() {
    return this.http.get(`${this.env}/books`)
  }

  addBook(book:Book) {
    return this.http.post(`${this.env}/books`, book)
  }
}
