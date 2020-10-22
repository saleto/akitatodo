import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { TodosComponent } from './todos/todos.component';
import { FilterComponent } from './todos/filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosModule } from './todos/todos.module';
import { TodoComponent } from './todos/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    BrowserModule, ReactiveFormsModule, TodosModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
