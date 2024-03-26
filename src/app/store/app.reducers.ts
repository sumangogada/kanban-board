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
    case AppActions.CREATE_ITEM:
      const newEntities = JSON.parse(JSON.stringify(state.entities));
      const item = (action as PayloadAction<Item>).payload;
      const key = item.id;
      newEntities[key] = item;
      return {
        ...state,
        entities: newEntities,
      };

    case AppActions.GET_ITEM:
      const id = (action as PayloadAction<Item>).payload;
      return { ...state };

    case AppActions.DELETE_ITEM:
      const idToRemove1 = (action as PayloadAction<number>).payload;
      return {
        ...state,
        todo: state.todo.filter((elem) => elem !== idToRemove1),
      };

    /**
     * Todo list
     */
    case AppActions.ADD_TODO:
      const newTodo = JSON.parse(JSON.stringify(state.todo));
      const toAddTodo = (action as PayloadAction<number>).payload;
      if (newTodo.indexOf(toAddTodo) === -1) {
        newTodo.push(toAddTodo);
      }
      return {
        ...state,
        todo: newTodo,
      };

    case AppActions.REMOVE_TODO:
      const idToRemove = (action as PayloadAction<number>).payload;
      return {
        ...state,
        todo: state.todo.filter((elem) => elem !== idToRemove),
      };

    /**
     * Doing list
     */
    case AppActions.ADD_DOING:
      const newDoing = JSON.parse(JSON.stringify(state.doing));
      const toAddDoing = (action as PayloadAction<number>).payload;
      if (newDoing.indexOf(toAddDoing) === -1) {
        newDoing.push(toAddDoing);
      }
      return {
        ...state,
        doing: newDoing,
      };

    case AppActions.REMOVE_DOING:
      const idToRemoveDoing = (action as PayloadAction<number>).payload;
      return {
        ...state,
        doing: state.doing.filter((elem) => elem !== idToRemoveDoing),
      };

    /**
     * Done list
     */
    case AppActions.ADD_DONE:
      const newDone = JSON.parse(JSON.stringify(state.done));
      const toAddDone = (action as PayloadAction<number>).payload;
      if (newDone.indexOf(toAddDone) === -1) {
        newDone.push(toAddDone);
      }

      return {
        ...state,
        done: newDone,
      };

    case AppActions.REMOVE_DONE:
      const idToRemoveDone = (action as PayloadAction<number>).payload;
      return {
        ...state,
        done: state.done.filter((elem) => elem !== idToRemoveDone),
      };

    default:
      return state;
  }
}
