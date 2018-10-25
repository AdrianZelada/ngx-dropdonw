import { Component, OnInit, Input, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable, Subject, BehaviorSubject, Subscription } from 'rxjs';
import { DropdownListComponent } from '../dropdown-list/dropdown-list.component';
import { DropdownDisplayComponent } from '../dropdown-display/dropdown-display.component';
import {tap, takeUntil} from 'rxjs/operators'
import { DropdownSearchComponent } from '../dropdown-search/dropdown-search.component';

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

  private _unsubscription : Subject<any> = new Subject();

  public items :Observable<any>;
  public sizeItems:number=0;
  public sizeSelect:number=0;
  public isAll :boolean = false;
  public values$ :Observable<any> = new Observable();
  public showList : boolean =false;
  public searchText : string = '';

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
  @Input() placeholder : string = 'Selection';
  @Input() itemDisplay : number = 1;

  @ViewChild(DropdownListComponent) dropdown :DropdownListComponent;
  @ViewChild(DropdownDisplayComponent) display :DropdownDisplayComponent;
  @ViewChild(DropdownSearchComponent) search :DropdownSearchComponent;
  
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
    
    this.display
      .click$
      .pipe(
        takeUntil(this._unsubscription)
      )
      .subscribe((data:any)=>{        
      this.dropdown.clickItem(data);
    });

    this.display
      .open$
      .pipe(
        takeUntil(this._unsubscription)
      )
      .subscribe((status:boolean)=>{
      this.showList=status;
    });


    this.search
      .search$
      .pipe(
        takeUntil(this._unsubscription)
      )
      .subscribe((text:string)=>{        
        this.searchText = text;
      });    
  }

  ngOnDestroy(){
    this._unsubscription.next();
    this._unsubscription.complete();
  }

  changeSelections(){
    this.dropdown.selectAll(this.sizeItems != this.sizeSelect);
  }

  toogle(){
    this.showList = !this.showList;
  }



}
