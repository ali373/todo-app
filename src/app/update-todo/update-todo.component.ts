import { Component, OnInit } from '@angular/core';
import { Todos } from '../todos';
import {TodoService} from '../todo.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {
todo:any;
TodoRecieved: any;
profileForm = new FormGroup({
    detail: new FormControl(''),
    responsible: new FormControl(''),
    priority: new FormControl(''),
    status: new FormControl('')
  });

  constructor(
  private todoService:TodoService,
  private router: Router,
  private route: ActivatedRoute
  ) { }

 
  ngOnInit() {
	this.route.paramMap.pipe(
	  switchMap((params: ParamMap) => {
	    return this.todoService.getTodoByID(params.get('id'));
	  })
	).subscribe(
	  result => {
	    this.TodoRecieved = result as any;
	    this.profileForm.patchValue({
	    	detail: this.TodoRecieved[0].todo_description,
	    	responsible : this.TodoRecieved[0].todo_responsible,
	    	status : this.TodoRecieved[0].todo_completed,
	    	priority : this.TodoRecieved[0].todo_priority,
	    });
	  },
	  error => {
	    console.log('Error on fetching data: ', error);
	  }
	);
	}

  tabdeli(id){
  var mytodo = ({
      Detail : this.profileForm.value.detail,
      Responsible : this.profileForm.value.responsible,
      Status : this.profileForm.value.status,
      Priority : this.profileForm.value.priority
    });
  this.todoService.updateTodo(id,mytodo).subscribe(data => {
    		console.log(data)
    		this.router.navigate(['/Todos/addTodo'])
    	});
    }
}
