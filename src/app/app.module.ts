import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UpdateTodoComponent } from './update-todo/update-todo.component';

const appRoutes: Routes = [
  { path: '', component: NewTodoComponent },
  { path: 'Todos/addTodo', component: NewTodoComponent },
  { path: 'Todos/allTodos', component: TodosComponent },
  { path: 'Todos/updateTodos/:id', component: UpdateTodoComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NewTodoComponent,
    UpdateTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
