import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoForm!: FormGroup

  constructor(private fb: FormBuilder) {

   }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      description: this.fb.control(""),
      priority: this.fb.control(""),
      dueDate: this.fb.control("")
    })
  }

  processTodoForm() {

  }

}