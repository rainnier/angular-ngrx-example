import { BookRoutingModule } from './book-routing.module';
import { BookEffects } from './state/book.effects';
import { EffectsModule } from '@ngrx/effects';
import { bookReducer } from './state/book.reducers';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BookRoutingModule,
    StoreModule.forFeature('bookStage', bookReducer),
    EffectsModule.forFeature([BookEffects]),
  ]
})
export class BookModule { }
