import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ID } from '@datorama/akita';
import { Todo } from './state/todo.model';
import { untilDestroyed } from '@ngneat/until-destroy';
import { TodoComponent } from './todo/todo.component';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./todos.component.scss'],

})
export class TodosComponent  {
  // implements OnInit
  @Input() todos: Todo[];
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<ID>();

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  

}