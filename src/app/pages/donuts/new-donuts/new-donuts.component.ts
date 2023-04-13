import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-donuts',
  templateUrl: './new-donuts.component.html',
  styleUrls: ['./new-donuts.component.scss']
})
export class NewDonutsComponent {
@Input() newDonut!:any;
}
