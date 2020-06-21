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

 updateToDo(todo) {
  this.httpClient.put("/public/index.php/tds/" + todo.id, todo.title)
  .subscribe(data => console.log(data))
 }
}