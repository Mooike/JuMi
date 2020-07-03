import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DatastorageService } from '../datastorage.service';
import {MatTableModule} from '@angular/material/table';
import { getMatTooltipInvalidPositionError } from '@angular/material/tooltip';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {Sort} from '@angular/material/sort';
export interface Todo {
  id: number;
  title: string;
  prio: number;
  status: string;
  enddate: Date;
  list_id: number;
  content: string;
}

 

@Component({
  selector: 'app-tdlist',
  templateUrl: './tdlist.component.html',
  styleUrls: ['./tdlist.component.css']
})
export class TdlistComponent implements OnInit {
  tdlist: any = null;
  td: any = null;
  hide: boolean = true; 
  

  sortedData: Todo[];
  @Input() event;
  
  constructor(public ds: DatastorageService) { 
    
   }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    this.getTodos();
    this.td = null;
    
}

sortData(sort: Sort) {
  const data = this.tdlist.slice();
  if (!sort.active || sort.direction === '') {
    this.sortedData = data;
    return;
  }


this.sortedData = data.sort((a, b) => {
  const isAsc = sort.direction === 'asc';
  switch (sort.active) {
    case 'id': return compare(a.id, b.id, isAsc);
    case 'title': return compare(a.title, b.title, isAsc);
    case 'prio': return compare(a.prio, b.prio, isAsc);
    case 'status': return compare(a.status, b.status, isAsc);
    case 'enddate': return compare(a.enddate, b.enddate, isAsc);
    case 'list_id': return compare(a.list_id, b.list_id, isAsc);
    case 'content': return compare(a.content, b.content, isAsc);
    default: return 0;
  }
});
}


  getTodos(){
    this.ds.loadToDos(this.event).subscribe(data => {
      this.tdlist = Object.keys(data).map(function(k) { return data[k] }); //Umwandlung von Onjekt in Array 
      console.log(this.tdlist);
      this.sortedData = this.tdlist.slice();
    })
    
    }
  todoSelect(t) {
    this.td = t;
    console.log(this.td)
    }
  deletetodo(todo){
    this.ds.deletetodo(todo);
    setTimeout(() => {
      this.getTodos()
    }, 50);
  }
  addtodo(todo){
      todo.list_id = this.event.id;
      this.ds.addtodo(todo);
      setTimeout(() => {
        this.getTodos()
      }, 50);
      this.hide = true;
    }
    
   
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}