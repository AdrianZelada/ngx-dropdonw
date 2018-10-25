import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DropdownSelectComponent } from './dropdown-select/dropdown-select/dropdown-select.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'dropdown';
  options: Observable<any>;
  selected: Array<any>=[];

  @ViewChild(DropdownSelectComponent) dropdown :DropdownSelectComponent;

  constructor(private http:HttpClient){

  }

  ngOnInit(){
    this.options = this.http.get('http://jsonplaceholder.typicode.com/users');
    this.selected = [{
      id:1
    }]
  }

  ngAfterViewInit(){
    this.dropdown.valueChanges$.subscribe((data)=>{
      console.log("data app");
      console.log(data);
    })
  }
}
