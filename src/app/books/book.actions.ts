import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

export const AddBook = createAction('[Book] Add Book', props<Book>());
export const AddBookSuccess = createAction('[Book] Book added successfully', props<Book>());
export const AddBookFailure = createAction('[Book] Failed to add book', props<{error: any}>());

export const RemoveBook = createAction('[Book] Remove Book', props<{bookId: string}>());