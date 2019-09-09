import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ad-intro',
  templateUrl: './ad-intro.component.html',
  styleUrls: ['./ad-intro.component.scss']
})
export class AdIntroComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
