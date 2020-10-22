import { Component, OnInit, NgZone } from '@angular/core';
import { initialFilters, VISIBILITY_FILTER } from './todos/filter/filter.model';
import { Todo } from './todos/state/todo.model';
import { TodosQuery } from './todos/state/todos.query';
import { TodosService } from './todos/state/todos.service';
import { Observable } from 'rxjs';
import { ID, akitaDevtools } from '@datorama/akita';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AkitaTodo';


  todos$: Observable<Todo[]>;
  activeFilter$: Observable<VISIBILITY_FILTER>;
 
  filters = initialFilters;

  constructor(private todosQuery: TodosQuery,
    private ngZone: NgZone,
    private todosService: TodosService) {
    akitaDevtools(ngZone);
  }

  ngOnInit() {
    this.todos$ = this.todosQuery.selectVisibleTodos$;
    this.activeFilter$ = this.todosQuery.selectVisibilityFilter$;
  }


  add(input: HTMLInputElement) {
    this.todosService.add(input.value);
    input.value = '';
  }

  complete(todo: Todo) {
    this.todosService.complete(todo);
  }

  delete(id: ID) {
    this.todosService.delete(id);
  }

  changeFilter(filter: VISIBILITY_FILTER) {
    this.todosService.updateFilter(filter);
  }

}
