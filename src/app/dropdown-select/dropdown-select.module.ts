import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownSelectComponent } from './dropdown-select/dropdown-select.component';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';
import { DropdownSearchComponent } from './dropdown-search/dropdown-search.component';
import { DropdownActionsComponent } from './dropdown-actions/dropdown-actions.component';
import { DropdownDisplayComponent } from './dropdown-display/dropdown-display.component';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports:[
    DropdownSelectComponent
  ],
  declarations: [DropdownSelectComponent, DropdownItemComponent, DropdownSearchComponent, DropdownActionsComponent, DropdownDisplayComponent, DropdownListComponent]
})
export class DropdownSelectModule { }
