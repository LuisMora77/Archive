import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-views-selection',
  templateUrl: './views-selection.component.html',
  styleUrls: ['./views-selection.component.scss']
})
export class ViewsSelectionComponent implements OnInit {

  SelectedView: string = "1";
  message: string;
  @Output() messageEvent = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(value:string) {
    this.SelectedView = value;
    this.message = value;
    this.messageEvent.emit(this.message)
  }
}
