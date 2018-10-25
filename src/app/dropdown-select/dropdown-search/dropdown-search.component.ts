import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'dropdown-search',
  templateUrl: './dropdown-search.component.html',
  styleUrls: ['./dropdown-search.component.css']
})
export class DropdownSearchComponent implements OnInit {

  private _search : Subject<any> = new Subject();
  public search$ : Observable<any> = this._search.asObservable();
  
  public form: FormGroup;
  constructor(private fb :FormBuilder) { 
    this.form = this.fb.group({
      search:new FormControl('')
    })
  }

  ngOnInit() {
    this.form.valueChanges.subscribe((data:any)=>{
      this._search.next(data.search);    
    })
  }  

}
