import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { VISIBILITY_FILTER } from '../filter/filter.model';

export interface TodosState extends EntityState<Todo> {}

export interface State extends EntityState<Todo> {
  ui: {
    filter: VISIBILITY_FILTER
  };
}

const initialState = {
  ui: { filter: VISIBILITY_FILTER.SHOW_ALL }
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<TodosState, Todo> {

  constructor() {
    super(initialState);
  }

}

