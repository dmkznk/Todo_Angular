import {Component, OnInit} from '@angular/core';
import {Todo, TodoService} from "./services/todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  newTodoText = '';

  constructor(public todoService: TodoService) {}


  ngOnInit(): void {
    this.todoService.getAndSetTodos();
  }

  public addTodo(): void {
    if (!this.newTodoText.trim()) {
      return
    }

    const newTodo: Todo = {
      text: this.newTodoText[0].toUpperCase() + this.newTodoText.slice(1),
      id: Math.random(),
      date: new Date(),
      completed: false
    }

    this.todoService.addTodo(newTodo)
    this.newTodoText = '';
  }

}
