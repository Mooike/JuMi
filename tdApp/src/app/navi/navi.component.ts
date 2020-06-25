import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatastorageService } from '../datastorage.service';

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
  onSubmit(list: NgForm){
    
    console.log(list.value);
    
    this.ds.addList(list.value);
    setTimeout(() => {
      this.getlists()
    }, 50);
    
    

  }
  deleteList(list){
    this.ds.deleteList(list);
    alert("liste gelöscht");
    setTimeout(() => {
      this.getlists()
    }, 50);
  }
  onClick(li: Event): void {
    this.eventClicked.emit(li);
    console.log("aus navi unten");
    console.log(li)

  }
  visible(){
    this.hide = !this.hide;
    console.log(this.hide)
  }
}

