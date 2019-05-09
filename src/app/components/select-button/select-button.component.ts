import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.css']
})
export class SelectButtonComponent implements OnInit {

  @Input() id: number;
  @Output() signal = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showId() {
    console.log(this.id);
  }

  emitSignal() {
    this.signal.emit(this.id);
  }

}
