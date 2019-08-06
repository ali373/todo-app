import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todos } from '../todos';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
Todo : any;
myTodos : any;

profileForm: FormGroup;
submitted = false;


  constructor(private todoService:TodoService , private formBuilder: FormBuilder) { }

  ngOnInit():void {
  
  this.profileForm=this.formBuilder.group({
   detail:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  responsible:['', Validators.required],
  priority:['', Validators.required],
   status:['', [Validators.required , Validators.min(0), Validators.max(1)]]
 });

 }

 get f(){
 return this.profileForm.controls;
 }

  get detail() {return this.profileForm.get('detail');}

  clicked():void{
    this.todoService.getTodos().subscribe(data => {
        console.log(data)

    });
  }
   list2():void{
      this.todoService.getTodos().subscribe(data => {
        this.myTodos = data
        console.log(this.myTodos)
      });
    }

  onSubmit() {
    this.submitted=true;
     if (this.profileForm.invalid) {
        return;
      }
      else{

      var mytodo = ({
          Detail : this.profileForm.value.detail,
          Responsible : this.profileForm.value.responsible,
          Status : this.profileForm.value.status,
          Priority : this.profileForm.value.priority
        });
        this.todoService.addTodo(mytodo).subscribe(data => {
            console.log(data)
        });
      }

      alert("Sure to make changes to database?")
  }
}
