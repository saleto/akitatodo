import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TodosComponent } from './todos.component';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodosComponent, FilterComponent],
  declarations: [TodoComponent, TodosComponent, FilterComponent],
  bootstrap: [TodosModule]

})
export class TodosModule { }
