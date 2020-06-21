import { Component, OnInit, Input } from '@angular/core';
import { DatastorageService } from '../datastorage.service';
@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  @Input() list: any[] = [];
  lists: any[] = [];
  //list: any = null;
  hide: boolean = true;
  
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
  addList(){
    console.log("aus navi:" + this.list);
    this.ds.addList(this.list)

  }
  visible(){
    this.hide = !this.hide;
    console.log(this.hide)
  }
}

