import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from "ionic-angular";
import { SignUpPage } from "../SignUpPage/sign-up";
import { ViewPage } from "../BillView/view";

@IonicPage()
@Component({
  selector: "page-log-in",
  templateUrl: "log-in.html"
})
export class LogInPage {
  public view = ViewPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false);
  }
  login() {
    this.navCtrl.setRoot(ViewPage);
  }

  signUp() {
    this.navCtrl.push(SignUpPage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LogInPage");
  }
}
