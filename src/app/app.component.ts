import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "todo-frontend";
  todoList: FormGroup[] = [];
  todoValues: Todo[] = [];

  updateForm2(todoItem: FormGroup) {
    this.todoList.push(todoItem)
  }

  updateForm(todoValue: Todo) {
    this.todoValues.push(todoValue);
  }
}
