import {
  default as PayloadAction
} from "./app.actions";
import { Item } from "./item.model";
import { AppState, initializeState } from "./app.state";
import * as AppActions from "./app.actions";
import { Action } from "@ngrx/store";

const initialState = initializeState();

export function AppReducer(state: AppState = initialState, action: Action) {
  switch (action.type) {
    /**
     * Item entities
     */
    case AppActions.ItemActionTypes.CREATE:
      const newEntities = JSON.parse(JSON.stringify(state.entities));
      const item = (action as PayloadAction<Item>).payload;
      const key = item.id;
      newEntities[key] = item;
      return {
        ...state,
        entities: newEntities,
      };

    case AppActions.ItemActionTypes.GET:
      const id = (action as PayloadAction<Item>).payload;
      return { ...state };

    case AppActions.ItemActionTypes.DELETE:
      const idToRemove1 = (action as PayloadAction<number>).payload;
      return {
        ...state,
        todo: state.todo.filter((elem) => elem !== idToRemove1),
      };

    /**
     * Todo list
     */
    case AppActions.ItemActionTypes.ADD_TODO:
      const newTodo = JSON.parse(JSON.stringify(state.todo));
      const toAddTodo = (action as PayloadAction<number>).payload;
      if (newTodo.indexOf(toAddTodo) === -1) {
        newTodo.push(toAddTodo);
      }
      return {
        ...state,
        todo: newTodo,
      };

    case AppActions.ItemActionTypes.REMOVE_TODO:
      const idToRemove = (action as PayloadAction<number>).payload;
      return {
        ...state,
        todo: state.todo.filter((elem) => elem !== idToRemove),
      };

    /**
     * Doing list
     */
    case AppActions.ItemActionTypes.ADD_IMPLEMENTING:
      const newDoing = JSON.parse(JSON.stringify(state.implement));
      const toAddDoing = (action as PayloadAction<number>).payload;
      if (newDoing.indexOf(toAddDoing) === -1) {
        newDoing.push(toAddDoing);
      }
      return {
        ...state,
        doing: newDoing,
      };

    case AppActions.ItemActionTypes.REMOVE_IMPLEMENTING:
      const idToRemoveDoing = (action as PayloadAction<number>).payload;
      return {
        ...state,
        doing: state.implement.filter((elem) => elem !== idToRemoveDoing),
      };

    /**
     * Done list
     */
    case AppActions.ItemActionTypes.ADD_DONE:
      const newDone = JSON.parse(JSON.stringify(state.done));
      const toAddDone = (action as PayloadAction<number>).payload;
      if (newDone.indexOf(toAddDone) === -1) {
        newDone.push(toAddDone);
      }

      return {
        ...state,
        done: newDone,
      };

    case AppActions.ItemActionTypes.REMOVE_DONE:
      const idToRemoveDone = (action as PayloadAction<number>).payload;
      return {
        ...state,
        done: state.done.filter((elem) => elem !== idToRemoveDone),
      };

    default:
      return state;
  }
}
