import { Component, OnInit } from '@angular/core';
import { DatastorageService } from '../datastorage.service';
@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  lists: any[] = [];
  list: any = null;
  constructor(public ds: DatastorageService) { }

  ngOnInit(): void {
    this.getlists()
  }

  getlists(){
    this.ds.loadlists().subscribe(data => {
      
      this.lists = Object.keys(data).map(function(k) { return data[k] }); //Umwandlung von Onjekt in Array 

      console.log(this.lists);
      
    });
  }
}

