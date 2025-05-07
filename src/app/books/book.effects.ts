import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as bookActions from './book.actions';
import { BookService } from "./book.service";
import { mergeMap, map, catchError, of } from "rxjs";

@Injectable()
export class BookEffects {

    //NgRx effect that responds to AddBook actions
    addBook$ = createEffect(() => this._actions$.pipe(
        ofType(bookActions.AddBook), //listen to actions of type 'AddBook'
        mergeMap((action) => this._bookService.addBook(action) //for each addbook, call addbook service, mergemap allows multiple calls
        .pipe(
            map(book => bookActions.AddBookSuccess(book)), //if addbook successful, dispatch addbook sucess action
            catchError((error) => of(bookActions.AddBookFailure({error}))) //if fails, dispatch error
        ))
    ));


    constructor(
        private _actions$: Actions,
        private _bookService: BookService
    ){}
}