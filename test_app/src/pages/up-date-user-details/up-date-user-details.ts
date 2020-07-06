import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController,
  AlertController
} from "ionic-angular";
import { ViewPage } from "../BillView/view";
import { BillDataServicesProvider } from "../../providers/bill-data-services/bill-data-services";

@IonicPage()
@Component({
  selector: "page-up-date-user-details",
  templateUrl: "up-date-user-details.html"
})
export class UpDateUserDetailsPage {
  public userData = {
    username: "Admin",
    phoneNo: "0987654321",
    email: "Admin@develpoer.com",
    pwd: "password"
  };
  public isDisable: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public alertCtrl: AlertController,
    public billDataServices: BillDataServicesProvider
  ) {
    // this.menuCtrl.enable(false);
  }

  editEnabled() {
    //console.log("Edit click");
    this.isDisable = false;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UpDateUserDetailsPage");
  }
  pop() {
    this.navCtrl.setRoot(ViewPage);
  }
  doConfirm() {
    let confirm = this.alertCtrl.create({
      title: "Making Changes",
      message: "Are you sure?",
      buttons: [
        {
          text: "Cancel",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "Okay",
          handler: () => {
            //this.navCtrl.setRoot(ViewPage);
            //  console.log("data in details.ts",this.billData);
            //  this.billDataServices.updateBillDataWithID(this.billData.productID,this.billData).subscribe(response => {
            //    console.log("responsed", response);
            //this.billDataServices.presentToast("Successfully Updated");
            //  })
          }
        }
      ]
    });
    confirm.present();
  }
}
