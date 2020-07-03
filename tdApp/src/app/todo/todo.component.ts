import { Component, OnInit, Input, SimpleChanges} from '@angular/core';
import { DatastorageService } from '../datastorage.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  @Input() todo: any = null;
  newtodo: any = null;
  hide:boolean;
  constructor(public ds: DatastorageService) { }

  ngOnInit(): void {
    
  }
  

  updateToDo(todo){
    console.log(this.todo);
    this.ds.updatetodo(todo);
    this.hide = true;
  }
  

}
