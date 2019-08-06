import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

	private _getUrl = "http://localhost:4000/student";
	private _getUrl1 = "http://localhost:4000/todos/";
	private posturl = "http://localhost:4000/todos/add";
	private deleteUrl="http://localhost:4000/todos/delete/";
	private putUrl = "http://localhost:4000/todos/update/";

	private httpOptions = {
	    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	  };

  	constructor(private http: HttpClient) { }

  	getTodos () {
    	return this.http.get(this._getUrl);
  	}

  	addTodo(data) {
    	return this.http.post(this.posturl, data, this.httpOptions);
  	}
  	deleteTodo(id){
  		return this.http.post(this.deleteUrl+id, this.httpOptions);
  	}
  	updateTodo(id,data){
  		return this.http.post(this.putUrl+id, data, this.httpOptions);
  	}

  	getTodoByID (id) {
    	return this.http.get(this._getUrl1+id, this.httpOptions);
  	}
}

