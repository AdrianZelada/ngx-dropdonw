import { Component, OnInit, Input, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable, Subject, BehaviorSubject, Subscription } from 'rxjs';
import { DropdownListComponent } from '../dropdown-list/dropdown-list.component';
import { DropdownDisplayComponent } from '../dropdown-display/dropdown-display.component';
import {tap} from 'rxjs/operators'

@Component({
  selector: 'dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.css']
})
export class DropdownSelectComponent implements OnInit, AfterViewInit, OnDestroy {

  private _options : Subject<any> = new Subject();
  public options$ : Observable<any> = this._options.asObservable();

  private _selected : Subject<any> = new Subject();
  public selected$ : Observable<any> = this._selected.asObservable();

  private _valueChanges : BehaviorSubject<any> = new BehaviorSubject([]);
  public valueChanges$ : Observable<any> = this._valueChanges.asObservable();
  
  public items :Observable<any>;
  public sizeItems:number=0;
  public sizeSelect:number=0;
  public isAll :boolean = false;
  public values$ :Observable<any> = new Observable();
  

  @Input() set options(opts:any){
    this._options.next(opts)    
    this.items=opts.pipe(
      tap((results:Array<any>)=>{
        this.sizeItems=results.length || 0;
      })
    );    
  }
  @Input() selected:Array<any>=[];

  @Input() key:string = 'id'; 
  @Input() label:string = 'name'; 

  @ViewChild(DropdownListComponent) dropdown :DropdownListComponent;
  @ViewChild(DropdownDisplayComponent) display :DropdownDisplayComponent;
  

  dropdownUnsub : Array<Subscription>=[];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){      
    this.values$=this.dropdown.currentSelects$.pipe(
      tap((data)=>{          
        this.sizeSelect=data.length;        
        this._valueChanges.next(data);
      })
    )    
    this.dropdownUnsub.push(this.display.click$.subscribe((data:any)=>{        
      this.dropdown.clickItem(data);
    }));
  }

  ngOnDestroy(){
    this.dropdownUnsub.forEach((subs:Subscription)=>{
      subs.unsubscribe();
    })
  }

  changeSelections(){
    this.dropdown.selectAll(this.sizeItems != this.sizeSelect);
  }

  toogle(){
    
  }



}
