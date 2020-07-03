import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';



@Injectable({
 providedIn: 'root'
})
export class DatastorageService {
 constructor(private httpClient: HttpClient) { }
  loadlists(): Observable<any> {
   return this.httpClient.get("/Seminararbeit/public/index.php/lists");
  }
  loaduser(): Observable<any> {
    return this.httpClient.get("/Seminararbeit/public/index.php/users");
   }
  addList(list){
    console.log("aus ds")
    console.log(list)
    return this.httpClient.post("/Seminararbeit/public/index.php/list/"+ list.name, list)
  .subscribe(data => console.log(data));
  }
  deleteList(list){
    return this.httpClient.delete("/Seminararbeit/public/index.php/list/"+ list.id).subscribe(data => console.log(data));
  }

  loadToDos(list): Observable<any> {
    return this.httpClient.get("/Seminararbeit/public/index.php/tds/" + list.id);
    }
  addtodo(todo){
    console.log(todo.title);
    return this.httpClient.post("/Seminararbeit/public/index.php/tds", todo).subscribe(data => console.log(data));
  }
  deletetodo(todo){
    return this.httpClient.delete("/Seminararbeit/public/index.php/todo/" + todo.id).subscribe(data => console.log(data));
  }
updatetodo(todo){
    return this.httpClient.put("/Seminararbeit/public/index.php/tds", todo).subscribe(data => console.log(data));
}

}