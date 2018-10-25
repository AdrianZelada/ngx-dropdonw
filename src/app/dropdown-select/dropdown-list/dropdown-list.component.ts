import { Component, OnInit, Input } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css']
})
export class DropdownListComponent implements OnInit {

  private _options : Subject<any> = new Subject();
  public options$ : Observable<any> = this._options.asObservable();

  private _currentSelects : BehaviorSubject<any> = new BehaviorSubject([]);
  public currentSelects$ : Observable<any> = this._currentSelects.asObservable();


  public itemsSelected : any ={};
  public mapSelected : Array<any> =[];
  
  
  @Input()  set options(opts){
    this._options.next(opts);
    this.mapSelected = opts;
    this.statusItems(opts);
  }

  @Input() set selected(opts:any){        
    this.statusItems(opts);
  }

  @Input() key:string = 'id'; 
  @Input() label:string = 'name'; 


  constructor() { }

  ngOnInit() {
  }

  clickItem(item:any){
    let key = item[this.key];
    this.itemsSelected[key] = !this.itemsSelected[key];     
    this.emitItems();
  }

  emitItems(){
    let items= [];
    for (const key in this.itemsSelected) {
      if(this.itemsSelected[key]){
        if (this.itemsSelected.hasOwnProperty(key)) {
          if(this.mapSelected){
            this.mapSelected.forEach((item:any)=>{
              if(item[this.key]==key){            
                items.push(item);
              }
            })        
          }        
        }
      }      
    }
    this._currentSelects.next(items);
  }
  
  selectAll(status:boolean){
    for (const key in this.itemsSelected) {
      this.itemsSelected[key]=status;
    } 
    this.emitItems();
  }

  private statusItems(items: Array<any>){
    if(items){      
      items.forEach((item:any)=>{
        let key = item[this.key];        
        if(this.itemsSelected.hasOwnProperty(key)){
          this.itemsSelected[key] = !this.itemsSelected[key];
        }else{
          this.itemsSelected[key] = false;
        }
      });
      this.emitItems();
    }    
  }

}
