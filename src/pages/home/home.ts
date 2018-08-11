import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TocPage } from '../toc/toc';

//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tocPage = TocPage;
  constructor() {
  }
//  goTocPage(){
//    this.navCtrl.push('TocPage');
//  }
}
