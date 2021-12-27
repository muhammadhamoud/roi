import { Component, Input } from '@angular/core';

@Component({
  selector: 'roinsight-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() no?: string;
  @Input() centerText?: boolean = false;

  // constructor() { }

  // ngOnInit(): void {
  // }

}
