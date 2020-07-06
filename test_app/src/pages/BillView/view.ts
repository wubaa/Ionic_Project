import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController,
} from "ionic-angular";
import { BillPage } from "../AddBill/bill";
import { SignUpPage } from "../SignUpPage/sign-up";
import { DetailPage } from "../BillDetails/detail";
import { BillDataServicesProvider } from "../../providers/bill-data-services/bill-data-services";

@IonicPage()
@Component({
  selector: "page-view",
  templateUrl: "view.html",
})
export class ViewPage {
  billDetails: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public billDataServices: BillDataServicesProvider
  ) {
    this.getAllBill();
    this.menuCtrl.enable(true);
    this.initializeItems();
  }

  initializeItems() {
    this.billDetails = [];
  }
  //Searchbar
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this.billDetails = this.billDetails.filter((item) => {
        return item.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }

  //post data function
  getAllBill() {
    this.billDataServices.startLoading();
    this.billDataServices.getBillList().subscribe((response) => {
      this.billDataServices.stopLoading();
      this.billDetails = response.data;
      console.log("Bill list", response);
    });
  }

  // bill details function starts here//
  detail(itemsList) {
    this.navCtrl.push(DetailPage, { data: itemsList });
  }
  // bill details function ends here//

  // bill deletion function starts here//
  deleteBill(itemID, cardIndex) {
    //console.log("delete function clicked");
    //to delete the card
    this.billDetails.splice(cardIndex, 1);

    //to delete from database
    this.billDataServices.deleteBill(itemID).subscribe((response) => {
      console.log("deleted item: ", itemID);
    });
  }
  //bill deletion function ends here\\

  doRefresh(refresher) {
    console.log("Begin async operation", refresher);

    setTimeout(() => {
      console.log("Async operation has ended");
      refresher.complete();
      this.getAllBill();
    }, 2000);
  }

  ionViewWillEnter() {
    //console.log("ionViewWillEnter triggered");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ViewPage");
  }
  signUp() {
    this.navCtrl.push(SignUpPage);
  }
  bill() {
    this.navCtrl.push(BillPage);
  }
}
