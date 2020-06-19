import { Component, OnInit } from '@angular/core';
import { DatastorageService } from '../datastorage.service';
@Component({
  selector: 'app-tdlist',
  templateUrl: './tdlist.component.html',
  styleUrls: ['./tdlist.component.css']
})
export class TdlistComponent implements OnInit {
  tdlist: any[] = [];
  td: any = null;
  constructor(public ds: DatastorageService) { }

  ngOnInit(): void {
    this.getToDos();
    
  }

  getToDos() {
    this.ds.loadToDos().subscribe(data => {
      
      this.tdlist = Object.keys(data).map(function(k) { return data[k] }); //Umwandlung von Onjekt in Array 

      console.log(this.tdlist);
      
    });
  }
  todoSelect(t) {
    this.td = t;
    console.log(this.td)
    }
}
