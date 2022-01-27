import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todoValues: Todo[] = [];
  todoArray: FormArray
  todoForm: FormGroup

  constructor(private fb: FormBuilder) {
      this.todoArray = this.fb.array([])
      this.todoForm = this.fb.group({ todos: this.todoArray })

   }

  ngOnInit(): void {
  }

}
