import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'dropdown-display',
  templateUrl: './dropdown-display.component.html',
  styleUrls: ['./dropdown-display.component.css']
})
export class DropdownDisplayComponent implements OnInit {

  private _click : BehaviorSubject<any> = new BehaviorSubject({});
  public click$ : Observable<any> = this._click.asObservable();
    
  @Input() items: Observable<any> = new Observable();
  @Input() label:string='name';

  constructor() { }

  ngOnInit() {

  }

  clickItem(item:any){
    this._click.next(item);
  }

}
