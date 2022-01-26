import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "todo-frontend";
  todoList: FormGroup[] = [];

  updateForm(todoItem: FormGroup) {
    this.todoList.push(todoItem)
  }
}
