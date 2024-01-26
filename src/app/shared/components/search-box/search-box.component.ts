import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {


  @Input()
  public placeholder: string = "";

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  emitValue(value: string){
    this.onValue.emit(value);
  }

}