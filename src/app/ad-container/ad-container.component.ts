import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AdContentComponent } from '../ad-content/ad-content.component';
import { AdService } from '../ad.service';
import { Subscription } from 'rxjs';
import { AdIntroComponent } from '../ad-intro/ad-intro.component';
import { IComponent } from '../models/IComponent';

@Component({
  selector: 'app-ad-container',
  templateUrl: './ad-container.component.html',
  styleUrls: ['./ad-container.component.scss']
})
export class AdContainerComponent implements OnInit, OnDestroy {

  @ViewChild('container', {
    read: ViewContainerRef,
    static: true
  }) container: ViewContainerRef;

  componentContentRef: ComponentRef<AdContentComponent>;
  componentIntroRef: ComponentRef<AdIntroComponent>;
  subscription: Subscription;
  constructor(private cdRef: ChangeDetectorRef, private adService: AdService) { }

  ngOnInit() {
    this.handleCloseAds();
    // const component = new IComponent(AdContentComponent, 'Data of Ad Content ...');
    // this.renderComponent(component);
  }

  ngOnDestroy() {
    if (this.componentContentRef) {
      this.componentContentRef.destroy();
    }
    if (this.componentIntroRef) {
      this.componentIntroRef.destroy();
    }
  }

  private handleCloseAds() {
    this.subscription = this.adService.close.subscribe(response => {
      console.log(response);

      if (response && !response['status']) {
        this.container.clear();
        if (this.componentContentRef) {
          this.componentContentRef.destroy();
        }
        if (this.componentIntroRef) {
          this.componentIntroRef.destroy();
        }
      }
    });
  }

  onInitAds() {
    this.adService._setEvent(true);
    const component = new IComponent(AdContentComponent, 'Data of Ad Content ...');
    this.renderComponent(component);
  }

  onInitIntro() {
    this.adService._setEvent(true);
    const component = new IComponent(AdIntroComponent, 'Data of Ad Intro ...');
    this.renderComponent(component);
  }

  private renderComponent(c: IComponent) {
    const container = this.container;
    container.clear();
    const injector = container.injector;

    const cfr: ComponentFactoryResolver = injector.get(ComponentFactoryResolver);
    const componentFactory = cfr.resolveComponentFactory(c.component);

    const componentRef = container.createComponent(componentFactory, container.length, injector);
    componentRef.instance.data = c.data;
    componentRef.changeDetectorRef.detectChanges();
    this.componentContentRef = componentRef;
    // this.cdRef.detectChanges();
  }

}
