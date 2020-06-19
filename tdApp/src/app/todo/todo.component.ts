import { Component, OnInit, Input } from '@angular/core';
import { DatastorageService } from '../datastorage.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  @Input() todo: any = null;
  constructor(public ds: DatastorageService) { }

  ngOnInit(): void {
  }

  updateToDo(){
    this.ds.updateToDo(this.todo)

  }

}
