import { Action } from '@ngrx/store';
import { Item } from './item.model';

/**
 * Extend @ngrx's Action to contain payload
 */
export default interface PayloadAction<T> extends Action {
  payload: T;
}

// Define action types
export enum ItemActionTypes {
  CREATE = '[Item] Create',
  GET = '[Item] Read',
  DELETE = '[Item] Delete',
  ADD_TODO = '[Item] Add to todo',
  REMOVE_TODO = '[Item] Remove from todo',
  ADD_IMPLEMENTING = '[Item] Add to implementing',
  REMOVE_IMPLEMENTING = '[Item] Remove from implementing',
  ADD_DONE = '[Item] Add to done',
  REMOVE_DONE = '[Item] Remove from done',
}

// Define action creators
export class CreateItem implements PayloadAction<Item> {
  readonly type = ItemActionTypes.CREATE;
  constructor(public payload: Item) { }
}

export class GetItem implements PayloadAction<number> {
  readonly type = ItemActionTypes.GET;
  constructor(public payload: number) { }
}

export class DeleteItem implements PayloadAction<number> {
  readonly type = ItemActionTypes.DELETE;
  constructor(public payload: number) { }
}

export class AddToTodo implements PayloadAction<number> {
  readonly type = ItemActionTypes.ADD_TODO;
  constructor(public payload: number) { }
}

export class RemoveFromTodo implements PayloadAction<number> {
  readonly type = ItemActionTypes.REMOVE_TODO;
  constructor(public payload: number) { }
}

export class AddToDoing implements PayloadAction<number> {
  readonly type = ItemActionTypes.ADD_IMPLEMENTING;
  constructor(public payload: number) { }
}

export class RemoveFromDoing implements PayloadAction<number> {
  readonly type = ItemActionTypes.REMOVE_IMPLEMENTING;
  constructor(public payload: number) { }
}

export class AddToDone implements PayloadAction<number> {
  readonly type = ItemActionTypes.ADD_DONE;
  constructor(public payload: number) { }
}

export class RemoveFromDone implements PayloadAction<number> {
  readonly type = ItemActionTypes.REMOVE_DONE;
  constructor(public payload: number) { }
}

// Export a union type of all actions
export type ItemActions = CreateItem | GetItem | DeleteItem | AddToTodo | RemoveFromTodo | AddToDoing | RemoveFromDoing | AddToDone | RemoveFromDone;
