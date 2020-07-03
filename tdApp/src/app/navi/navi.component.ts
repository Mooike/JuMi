import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatastorageService } from '../datastorage.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  @Input() list: any = null;
  @Output() eventClicked = new EventEmitter<Event>();
  lists: any[] = [];
  test: any = null;
  user: any = null;
  users:any = null;
  //list: any = null;
  hide: boolean = true;
  
  constructor(public ds: DatastorageService) { }

  ngOnInit(): void {
    this.getlists();
    this.getuser();
  }
  getuser(){
    this.ds.loaduser().subscribe(data => {
      this.users = Object.keys(data).map(function(k) { return data[k] });
      console.log(this.users)
    })
  }
  getlists(){
    this.ds.loadlists().subscribe(data => {
      
      this.lists = Object.keys(data).map(function(k) { return data[k] }); //Umwandlung von Onjekt in Array 

      console.log(this.lists);
      
    });
    
  }
  addlist(list){
    console.log(list);
    console.log(list)
    this.ds.addList(list);
    setTimeout(() => {
      this.getlists()
    }, 50);  
    this.hide = true;
  }
  deletelist(list){
    this.ds.deleteList(list);
    alert("liste gelöscht");
    this.getlists();
    
  }
  onClick(event: Event): void {
    this.eventClicked.emit(event);
    console.log("aus navi unten");
    console.log(event);
  }
  visible(){
    this.hide = !this.hide;
    
    console.log(this.hide)
  }
}

