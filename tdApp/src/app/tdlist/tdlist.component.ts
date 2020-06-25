import { Component, OnInit, Input } from '@angular/core';
import { DatastorageService } from '../datastorage.service';
@Component({
  selector: 'app-tdlist',
  templateUrl: './tdlist.component.html',
  styleUrls: ['./tdlist.component.css']
})
export class TdlistComponent implements OnInit {
  tdlist: any[] = [];
  td: any = null;
  @Input() event: Event;
  
  constructor(public ds: DatastorageService) { }
  ngOnInit(): void {
    this.getToDos()
    
  }

  getToDos() {
    console.log(this.event)
    this.ds.loadToDos().subscribe(data => {
      this.tdlist = Object.keys(data).map(function(k) { return data[k] });
      console.log(this.tdlist);
    })
    
  }
  
  todoSelect(t) {
    this.td = t;
    console.log(this.td)
    }
}
