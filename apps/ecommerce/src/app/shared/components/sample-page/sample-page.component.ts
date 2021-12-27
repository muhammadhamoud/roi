import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'roinsight-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent {
  @Input() title = '';
  @Input() subtitle?: string;
  @Input() number?: string;
  @Input() icon?: string;
  @Input() buttonText = '';
  @Input() centerText?: boolean = false;
  @Input() buttonDisabled?: boolean = false;
  @Input() route?: string | undefined;
  @Output() buttonEvent = new EventEmitter();

  constructor(private router: Router) { }

    buttonClicked() {
    if (this.route) {
      this.router.navigateByUrl(this.route);
    } else {
      this.buttonEvent.emit();
    }
  }

}
