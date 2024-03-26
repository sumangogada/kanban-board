import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const getState = createFeatureSelector<AppState>("kanban");

export const selectEntities = createSelector(getState, (state: AppState) => {
  return state.entities as Record<number, any>;
});

export const getTodoIdsList = createSelector(getState, (state: AppState) => {
  return state.todo;
});

export const getImplementIdsList = createSelector(getState, (state: AppState) => {
  return state.implement;
});

export const getDoneIdsList = createSelector(getState, (state: AppState) => {
  return state.done;
});

export const selectTodo = createSelector(
  selectEntities,
  getTodoIdsList,
  (entities, todo) => {
    const retArr: any[] = todo.map((id: number) => entities[id]);
    return retArr;
  }
);

export const selectImplementing = createSelector(
  selectEntities,
  getImplementIdsList,
  (entities, implement) => {
    const retArr = [];
    for (const id of implement) {
      retArr.push(entities[id]);
    }
    return retArr;
  }
);

export const selectDone = createSelector(
  selectEntities,
  getDoneIdsList,
  (entities, done) => {
    const retArr = [];
    for (const id of done) {
      retArr.push(entities[id]);
    }
    return retArr;
  }
);
