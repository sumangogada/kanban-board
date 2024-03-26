/**
 * State model
 */
export interface AppState {
  entities: object;
  todo: number[];
  implement: number[];
  done: number[];
}

/**
 * State initial
 */
export const initializeState = (): AppState => {
  return {
    entities: {},
    todo: [],
    implement: [],
    done: [],
  };
};
