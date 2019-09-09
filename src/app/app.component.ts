import { Component, OnInit } from '@angular/core';
import { AdService } from './ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dynamic-Component-Redering';
  isDialogOpen = false;
  constructor(private adService: AdService) { }
  ngOnInit() {
    this.adService.close.subscribe(response => {
      (response && response['status']) ? this.isDialogOpen = true : this.isDialogOpen = false;
      console.log(this.isDialogOpen);

    });
  }
  closeDialog() {
    this.adService._setEvent(false);
  }
}
