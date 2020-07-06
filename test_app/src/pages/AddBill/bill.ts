import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from "ionic-angular";
import { Camera, CameraOptions } from "@ionic-native/camera";
//import { DetailPage } from "../BillDetails/detail";
import { ViewPage } from "../../pages/BillView/view";
import { BillDataServicesProvider } from "../../providers/bill-data-services/bill-data-services";

@IonicPage()
@Component({
  selector: "page-bill",
  templateUrl: "bill.html"
})
export class BillPage {
  mypic: any;
  billDetails ={
    "billName":"",
    "startDate":"",
    "endData":"",
    "reminderDate":"",
    "aboutBill":""
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    public menuCtrl: MenuController,
    public billDataServices: BillDataServicesProvider
  ) {
    //this.menuCtrl.enable(false);
  }

  return_to_view() {
    this.navCtrl.setRoot(ViewPage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad BillPage");
  }

  //post bill data starts here//
  postBillData(){
    //  this.billDataServices.postBillData(this.billDetails).subscribe(response => {
    //  console.log("response:", response);
    //  })
  }
  //post bill data ends here//


  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.mypic = "data:image/jpeg;base64," + imageData;
      },
      err => {
        // Handle error
      }
    );
  }
}
