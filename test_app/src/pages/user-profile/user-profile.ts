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
  selector: "page-user-profile",
  templateUrl: "user-profile.html"
})
export class UserProfilePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UserProfilePage");
  }

  pop() {
    this.navCtrl.setRoot(ViewPage);
  }
}
