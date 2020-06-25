import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Injectable({
 providedIn: 'root'
})
export class DatastorageService {
 constructor(private httpClient: HttpClient) { }
 loadToDos(): Observable<any> {
   
    return this.httpClient.get("/Seminararbeit/public/index.php/tds");
    }
  deleteList(list){
    return this.httpClient.delete("/Seminararbeit/public/index.php/deletelistsbyid/" + list.id);
  }
  loadlists(): Observable<any> {
      return this.httpClient.get("/Seminararbeit/public/index.php/lists");
      }
  addList(list){
    console.log("aus ds: " + list.title)
    return this.httpClient.post("/Seminararbeit/public/index.php/addList/"+ list.title,list)
    .subscribe(data => console.log(data));
    }
    

 updateToDo(todo) {
    console.log(todo)
  this.httpClient.put("/Seminararbeit/public/index.php/tds/" + todo.id , todo)
  .subscribe(data => console.log(data))
 }
}