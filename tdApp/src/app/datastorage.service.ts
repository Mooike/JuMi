import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { title } from 'process';
@Injectable({
 providedIn: 'root'
})
export class DatastorageService {
 constructor(private httpClient: HttpClient) { }
 loadToDos(): Observable<any> {
    return this.httpClient.get("/Seminararbeit/public/index.php/tds");
    }
    loadlists(): Observable<any> {
      return this.httpClient.get("/Seminararbeit/public/index.php/lists");
      }
  addList(list){
    console.log("aus ds: " + list)
    return this.httpClient.post("/Seminararbeit/public/index.php/addList", list.title)
    .subscribe(data => console.log(data));
    }
    

 updateToDo(todo) {
    console.log(todo)
  this.httpClient.put("/Seminararbeit/public/index.php/tds/" + todo.id , todo)
  .subscribe(data => console.log(data))
 }
}