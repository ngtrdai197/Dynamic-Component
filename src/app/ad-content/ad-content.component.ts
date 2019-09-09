import { Component, OnInit, Input } from '@angular/core';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-ad-content',
  templateUrl: './ad-content.component.html',
  styleUrls: ['./ad-content.component.scss'],
})
export class AdContentComponent implements OnInit {

  @Input() data: string;
  constructor(private adService: AdService) { }

  ngOnInit() {
    console.log(this.data);
  }

  closeEvent() {
    this.adService._setEvent(false, 'Closed AdContent Component');
  }
}
