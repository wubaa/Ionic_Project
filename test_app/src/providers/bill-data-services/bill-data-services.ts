import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { ToastController, LoadingController } from "ionic-angular";

/*
  Generated class for the BillDataServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BillDataServicesProvider {
  public ACTUAL_URL = "http://dummy.restapiexample.com/api/v1/";
  public fileLoading: any;
  public internetLoading: any;
  public toast: any;

  constructor(
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {
    console.log("Hello BillDataServicesProvider Provider");
  }
  // HTTP Request Mehods//
  getData(url): Observable<any> {
    return this.http
      .get(url, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      })
      .pipe(
        map(
          (res: any) => {
            // console.log("response data", res);
            return res;
          }
          //catchError(this.handleError<LoginModel>('deleteProduct'))
        )
      );
  }

  //POST DATA//
  postData(url, data): Observable<any> {
    return this.http
      .post(url, data, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      })
      .pipe(
        map(res => {
          // console.log("Res : ",res);
          return res;
        })
      );
  } //end of postData

  //update data//
  updateData(url, data): Observable<any> {
    console.log("data in update method", data);
    return this.http
      .put(url, data, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      })
      .pipe(
        map(res => {
          // console.log("Res : ",res);
          return res;
        })
      );
  }

  //end of update data//

  // delete method starts here //
  deleteData(url): Observable<any> {
    return this.http
      .delete(url, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      })
      .pipe(
        map(res => {
          console.log("Res : ", res);
          return res;
        })
      );
  }
  // delete method ends here //

  //toast method starts here\\
  presentToast(msg) {
    this.toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: "bottom",
      cssClass: "toastcss",
      dismissOnPageChange: false
    });

    this.toast.onDidDismiss(() => {
      //console.log('Dismissed toast');
    });

    this.toast.present();
  }
  //toast method ends here\\

  /*presentAlert(subTitle) {
  let alert = this.alertCtrl.create({
    title: 'Message',
    subTitle: subTitle,
    buttons: [{
      text: 'OK',
    }],
    cssClass: 'alertcss'
  });
  alert.present();
}*/

  //loading alert starts here\\
  startLoading() {
    this.fileLoading = this.loadingCtrl.create({
      content: "fetching your data"
    });

    this.fileLoading.present();

    setTimeout(() => {
      this.fileLoading.dismiss();
    }, 10000);
  }

  stopLoading() {
    this.fileLoading.dismiss();
  }
  //loading alert ends here\\

  //Get and Post Methods for bills start here//

  postBillData(data) {
    let url = this.ACTUAL_URL + "create";
    return this.postData(url, data);
  }
  updateBillDataWithID(id, data) {
    console.log("data in updateBill function", data);
    let url = this.ACTUAL_URL + "update/" + id;
    return this.updateData(url, data);
  }
  getBillList() {
    let url = this.ACTUAL_URL + "employees";
    return this.getData(url);
  }
  deleteBill(id) {
    let url = this.ACTUAL_URL + "delete/" + id;
    return this.deleteData(url);
  }
  //Get and Post Methods for bills end here//

  //Get and post methods for users start here//

  //Get and post methods for users end here//
}
