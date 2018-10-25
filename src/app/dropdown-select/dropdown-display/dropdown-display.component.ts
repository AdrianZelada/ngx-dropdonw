import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'dropdown-display',
  templateUrl: './dropdown-display.component.html',
  styleUrls: ['./dropdown-display.component.css']
})
export class DropdownDisplayComponent implements OnInit {

  public open : boolean =false;
  
  private _click : BehaviorSubject<any> = new BehaviorSubject({});
  public click$ : Observable<any> = this._click.asObservable();

  private _open : BehaviorSubject<boolean> = new BehaviorSubject(this.open);
  public open$ : Observable<boolean> = this._open.asObservable();
    
  @Input() items: Observable<any> = new Observable();
  @Input() label:string='name';
  @Input() placeholder : string;
  @Input() itemDisplay : number;
  @Input() placeholderSelected : string;
  
  constructor() { }

  ngOnInit() {

  }

  clickItem(item:any){
    this._click.next(item);
  }

  toggle(){    
    this.open = !this.open;
    this._open.next(this.open);
  }

}
