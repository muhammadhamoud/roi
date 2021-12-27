import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'roinsight-item-quantity',
  templateUrl: './item-quantity.component.html',
  styleUrls: ['./item-quantity.component.scss']
})
export class ItemQuantityComponent implements OnInit {
  @Input() quantity = 0;
  @Input() maxValue?: number = 0;
  @Input() disabled?: boolean = false;
  @Output() setQuantityEvent = new EventEmitter<number>();

  values: number[] = [];

  constructor() { }

  ngOnInit(): void {
    if (this.maxValue) {
      for (let i = 1; i <= this.maxValue; i++) {
        this.values.push(i);
      }
    }
  }

  setQuantity(value: number) {
    this.setQuantityEvent.emit(value);
  }

}
