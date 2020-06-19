import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root'
})
export class DatastorageService {
 constructor(private httpClient: HttpClient) { }
 loadToDos(): Observable<any> {
 return this.httpClient.get("https://localhost/Seminararbeit/public/index.php/tds");
 }

 updateToDo(todo) {
  this.httpClient.put("/Seminararbeit/public/index.php/tds/" + todo.id, todo.title)
  .subscribe(data => console.log(data))
 }
}