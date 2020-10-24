import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";

export interface Todo {
  text: string;
  id: number;
  date: Date;
  completed: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: Array<Todo>;

  constructor() {
    // this.getAndSetTodos();
  }

  public getAndSetTodos(): void {
    this.todos = JSON.parse(localStorage.getItem('todosLS')) || [];
  }

  public setToLS(): void {
    localStorage.setItem(environment.localStorageKey, JSON.stringify(this.todos));
  }

  public addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.setToLS()
  }

  public deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.setToLS()
  }

  public completeTodo(id: number): void {
    this.todos.find(t => t.id === id).completed = true;
    this.setToLS()
  }
}

