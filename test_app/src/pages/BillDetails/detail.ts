import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController,
  AlertController
} from "ionic-angular";
//import { ViewPage } from "../../pages/BillView/view";
import { BillDataServicesProvider } from "../../providers/bill-data-services/bill-data-services";

@IonicPage()
@Component({
  selector: "page-detail",
  templateUrl: "detail.html"
})
export class DetailPage {
  public data: any;
  public isDisable: boolean = true;
  public billData = {
    productID: "",
    productName: "",
    startDate: "",
    endDate: "",
    remindDate: ""
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public alertCtrl: AlertController,
    public billDataServices: BillDataServicesProvider
  ) {
    //this.menuCtrl.enable(false);
    this.data = navParams.get("data");
    console.log("Object Detail", this.data);

    this.billData.productID = this.data.id;
    this.billData.productName = this.data.employee_name;
    this.billData.startDate = this.data.employee_salary;
    this.billData.endDate = this.data.employee_age;
    //this.billData.productName = this.data.employee_name;
  }

  editEnabled() {
    //console.log("Edit click");
    this.isDisable = false;
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
            console.log("data in details.ts", this.billData);
            this.billDataServices
              .updateBillDataWithID(this.billData.productID, this.billData)
              .subscribe(response => {
                console.log("responsed", response);
                this.billDataServices.presentToast("Successfully Updated");
              });
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DetailPage");
  }
}
