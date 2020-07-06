import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from "ionic-angular";
import { LogInPage } from "../LogInPage/log-in";
import { BillDataServicesProvider } from "../../providers/bill-data-services/bill-data-services";

@IonicPage()
@Component({
  selector: "page-sign-up",
  templateUrl: "sign-up.html"
})
export class SignUpPage {
  public return_to_login = LogInPage;

  userData = {
    fullName: "",
    phoneNo: "",
    email: "",
    password: ""
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public billDataServices: BillDataServicesProvider
  ) {
    this.menuCtrl.enable(false);
  }

  // Post data starts here//
  postUserData() {
    //console.log("Details:",this.userData.fullName+" "+this.userData.phoneNo+" "+this.userData.email+" "+this.userData.password);
    // this.billDataServices.postBillData(this.userData).subscribe(response => {
    //     console.log("response:", response);
    //   })
  }
  //post data ends here//

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignUpPage");
  }
}
