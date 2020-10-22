import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ID } from '@datorama/akita';
import { untilDestroyed } from '@ngneat/until-destroy';
import { Todo } from '../state/todo.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit, OnDestroy {
  @Input() todo: Todo;
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<ID>();

  control: FormControl;
  // subcription: any;
  subcription: Subscription;

  ngOnInit() {
    this.control = new FormControl(this.todo.completed);

    // this.control.valueChanges.pipe(untilDestroyed(this)).subscribe((completed: boolean) => {
    //   this.complete.emit({ ...this.todo, completed });
    // });

    this.subcription = this.control.valueChanges.subscribe((completed: boolean) => {
      this.complete.emit({ ...this.todo, completed });
    });
  }

  ngOnDestroy(): void { 
    this.subcription.unsubscribe();
  
  }
}
