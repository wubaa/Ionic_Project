import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from "ionic-angular";

import { ViewPage } from "../BillView/view";

@IonicPage()
@Component({
  selector: "page-about-us",
  templateUrl: "about-us.html"
})
export class AboutUsPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {
    // this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AboutUsPage");
  }
  pop() {
    this.navCtrl.setRoot(ViewPage);
  }
}
