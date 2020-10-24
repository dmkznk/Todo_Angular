import {Component, Input, OnInit} from '@angular/core';
import {Todo, TodoService} from "../services/todo.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Input() idx: number;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id)
  }

  completeTodo(id: number) {
    this.todoService.completeTodo(id)
  }
}
