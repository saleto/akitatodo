import { Injectable } from '@angular/core';
import { TodosStore, TodosState } from './todos.store';
// import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { createTodo, Todo } from './todo.model';
import { ID } from '@datorama/akita';
import { VISIBILITY_FILTER } from '../filter/filter.model';

@Injectable({ providedIn: 'root' })
export class TodosService  {

  constructor(protected todosStore: TodosStore) {
    // super(todosStore);
  }

  updateFilter(filter: VISIBILITY_FILTER) {
    this.todosStore.update({
      ui:{
        filter
      }
    });

  }
  complete({ id, completed }: Todo) {
    this.todosStore.update(id, {
      completed
    });
  }


  add(title: string) {
    const todo = createTodo({ id: Math.random(), title });
    this.todosStore.add(todo);
  }


  delete(id: ID) {
    this.todosStore.remove(id);
  }

}
