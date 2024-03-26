///<reference path="store/app.actions.ts"/>
import { Component, OnInit } from "@angular/core";
import { Item } from "./store/item.model";
import { Store } from "@ngrx/store";
import { AppState } from "./store/app.state";
import { Observable } from "rxjs";
import { selectTodo, selectImplementing, selectDone, selectEntities } from "./store/app.selectors";
import PayloadAction, * as AppActions from "./store/app.actions";
import { kanbanInputComponent } from "./kanban-input/kanban-input.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  currentCardNum = 0;
  itemEntities$: Observable<object> | undefined;
  todoList$: Observable<Item[]> | undefined;
  doingList$: Observable<Item[]> | undefined;
  doneList$: Observable<Item[]> | undefined;

  constructor(private store: Store<AppState>, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.itemEntities$ = this.store.select(selectEntities);
    this.todoList$ = this.store.select(selectTodo);
    this.doingList$ = this.store.select(selectImplementing);
    this.doneList$ = this.store.select(selectDone);
  }

  /**
   * When moving the task to To Do column
   */
  moveToTodo(id: number) {
    const addTodo: PayloadAction<number> = {
      type: AppActions.ItemActionTypes.ADD_TODO,
      payload: id,
    };
    const removeDoing: PayloadAction<number> = { type: AppActions.ItemActionTypes.REMOVE_IMPLEMENTING, payload: id };
    const removeDone: PayloadAction<number> = { type: AppActions.ItemActionTypes.REMOVE_DONE, payload: id };
    this.store.dispatch(addTodo);
    this.store.dispatch(removeDoing);
    this.store.dispatch(removeDone);
  }

  /**
   * When moving the task to Doing column
   */
  moveToImplementing(id: number) {
    const removeTodo: PayloadAction<number> = {
      type: AppActions.ItemActionTypes.REMOVE_TODO,
      payload: id,
    };
    const addDoing: PayloadAction<number> = { type: AppActions.ItemActionTypes.ADD_IMPLEMENTING, payload: id };
    const removeDone: PayloadAction<number> = { type: AppActions.ItemActionTypes.REMOVE_DONE, payload: id };
    this.store.dispatch(removeTodo);
    this.store.dispatch(addDoing);
    this.store.dispatch(removeDone);
  }

  /**
   * When moving the task to To Done column
   */
  moveToDone(id: number) {
    const removeTodo: PayloadAction<number> = {
      type: AppActions.ItemActionTypes.REMOVE_TODO,
      payload: id,
    };
    const removeDoing: PayloadAction<number> = { type: AppActions.ItemActionTypes.REMOVE_IMPLEMENTING, payload: id };
    const addDone: PayloadAction<number> = { type: AppActions.ItemActionTypes.ADD_DONE, payload: id };
    this.store.dispatch(removeTodo);
    this.store.dispatch(removeDoing);
    this.store.dispatch(addDone);
  }

  /**
   * To open Dialog box
   */
  openDialog(): void {
    const dialogRef = this.dialog.open(kanbanInputComponent, {
      height: "200px",
      width: "400px",
      data: { text: "" },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result !== "") {
        this.createItem(result);
      }
    });
  }

  /**
   * When creating new task or story
   */
  createItem(text: string) {
    const card = {
      id: this.currentCardNum++,
      text: text,
    };
    const createItemAction: PayloadAction<Item> = {
      type: AppActions.ItemActionTypes.CREATE,
      payload: card,
    };
    this.store.dispatch(createItemAction);
    this.moveToTodo(card.id);
    return card;
  }

  //NEW
  /**
   * When deleting new task or story
   */
  // deleteItem(text: string) {
  //   const card = {
  //     id: this.currentCardNum,
  //     text: text,
  //   };
  //   const deleteItemAction: PayloadAction<Item> = {
  //     type: DELETE_ITEM,
  //     payload: card,
  //   };
  //   this.store.dispatch(deleteItemAction);
  //   this.deleteCard(card.id);
  //   return card;
  // }

  /**
   * When moving the task to To Do column
   */
  deleteItem(id: number) {
    const removeTodo: PayloadAction<number> = { type: AppActions.ItemActionTypes.REMOVE_TODO, payload: id };
    this.store.dispatch(removeTodo);
  }
}
