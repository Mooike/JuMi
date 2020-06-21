import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
   
    

 updateToDo(todo) {
    console.log(todo.title)
  this.httpClient.put("/Seminararbeit/public/index.php/tds/" + todo.id , todo)
  .subscribe(data => console.log(data))
 }
}