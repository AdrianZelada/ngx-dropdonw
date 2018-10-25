import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css']
})
export class DropdownItemComponent implements OnInit {

  @Input() key:string;
  @Input() label:string;
  @Input() selected : boolean =false;
  

  constructor() { }

  ngOnInit() {
  }

}
