import { Component, OnInit } from '@angular/core';
import { Todos } from '../todos';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
	myTodos : any;
	
  constructor(private todoService:TodoService) { }		

  ngOnInit() {
  	this.list()
  }
  list():void{
    	this.todoService.getTodos().subscribe(data => {
    		this.myTodos = data
    		console.log(this.myTodos[0])         	
    	});
    }
    action(id):void{
      var i ;
      var index ;
	    if(confirm("Are you sure to want to delete this entry ?")){
	    	this.todoService.deleteTodo(id).subscribe(data => {
          if(data === "TODO DELETED"){
            for(i = 0 ; i < this.myTodos.length ; i++){
              if(id == this.myTodos[i].id){
                index = i
              }
            }
            this.myTodos.splice(index,1)
            console.log(this.myTodos)
          }
    		});
	    }
    }
     
}
