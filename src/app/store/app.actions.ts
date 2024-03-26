import { Action } from '@ngrx/store';
import { Item } from './item.model';

/**
 * Extend @ngrx's Action to contain payload
 */
export default interface PayloadAction<T> extends Action {
  payload: T;
}

/**
 * Item entities
 */
export const CREATE_ITEM = '[Item] Create';
export const GET_ITEM = '[Item] Read';
export const DELETE_ITEM = '[Item] Delete';

export class CreateItem implements PayloadAction<Item> {
  readonly type = CREATE_ITEM;
  payload: Item;
  constructor(payload: Item) {
    this.payload = payload;
  }
}

export class GetItem implements PayloadAction<number> {
  readonly type = GET_ITEM;
  payload: number;
  constructor(itemId: number) { this.payload = itemId; }
}

export class DeleteItem implements Action {
  readonly type = DELETE_ITEM;
  payload: number;
  constructor(itemId: number) { this.payload = itemId; }
}

/**
 * Todo list
 */
export const ADD_TODO = '[Item] Add to todo';
export const REMOVE_TODO = '[Item] Remove from todo';

export class AddToTodo implements PayloadAction<number> {
  readonly type = ADD_TODO;
  payload: number;
  constructor(itemId: number) { this.payload = itemId; }
}

export class RemoveFromTodo implements Action {
  readonly type = REMOVE_TODO;
  payload: number;
  constructor(itemId: number) { this.payload = itemId; }
}

/**
 * Doing list
 */
export const ADD_DOING = '[Item] Add to doing';
export const REMOVE_DOING = '[Item] Remove from doing';

export class AddToDoing implements PayloadAction<number> {
  readonly type = ADD_DOING;
  payload: number;
  constructor(itemId: number) { this.payload = itemId; }
}

export class RemoveFromDoing implements Action {
  readonly type = REMOVE_DOING;
  payload: number;
  constructor(itemId: number) { this.payload = itemId; }
}

/**
 * Done list
 */
export const ADD_DONE = '[Item] Add to done';
export const REMOVE_DONE = '[Item] Remove from done';

export class AddToDone implements PayloadAction<number> {
  readonly type = ADD_DONE;
  payload: number;
  constructor(itemId: number) { this.payload = itemId; }
}

export class RemoveFromDone implements Action {
  readonly type = REMOVE_DONE;
  payload: number;
  constructor(itemId: number) { this.payload = itemId; }
}


// Export a type of all actions
export type AppActions = CreateItem | GetItem | DeleteItem | AddToTodo | RemoveFromTodo | AddToDoing | RemoveFromDoing | AddToDone | RemoveFromDone;
