import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenDateValidator } from '../date-validation.directive';
import { Todo } from '../todo';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup = <FormGroup>{};
  form: FormGroup;
  tomorrow = new Date();
  currentDate = new Date();
  todoValues: Todo[] = [];
  priorities = ["High", "Medium", "Low"];

  @Output() onSubmitForm2 = new EventEmitter<FormGroup>();
  @Output() onSubmitForm = new EventEmitter<Todo>();

  taskFormControl = new FormControl("", [Validators.required]);
  priorityFormControl = new FormControl("", [Validators.required]);
  dueDateFormControl = new FormControl("", [Validators.required]);

  constructor(private fb: FormBuilder) {
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
    this.form = this.fb.group({
      task:this.taskFormControl,
      priority: this.priorityFormControl,
      dueDate: this.dueDateFormControl
    })
   }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      description: this.fb.control("", [Validators.required]),
      priority: this.fb.control("", [Validators.required]),
      dueDate: this.fb.control("", [Validators.required])
    })
  }

  processTodoForm() {
    this.onSubmitForm2.emit(this.todoForm)
    this.ngOnInit()
  }

  addTodo() {
    console.log("Add todo");
    let taskId = uuidv4();
    let singleTodo = new Todo(
      this.form.value.task,
      this.form.value.priority,
      this.form.value.dueDate,
      taskId
    )
    this.onSubmitForm.emit(singleTodo)
    this.todoValues.push(singleTodo);

    this.taskFormControl.reset();
    this.dueDateFormControl.reset();
    this.priorityFormControl.reset();
    console.log(JSON.stringify(singleTodo));

    localStorage.setItem(taskId, JSON.stringify(singleTodo));
  }


}
