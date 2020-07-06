import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { Camera } from "@ionic-native/camera";
import { MyApp } from "./app.component";
//import { HomePage } from "../pages/home/home";
import { LogInPage } from "../pages/LogInPage/log-in";
import { SignUpPage } from "../pages/SignUpPage/sign-up";
import { ViewPage } from "../pages/BillView/view";
import { BillPage } from "../pages/AddBill/bill";
import { WelcomePage } from "../pages/WelcomePage/welcome";
import { DetailPage } from "../pages/BillDetails/detail";
import { AboutUsPage } from "../pages/about-us/about-us";
import { UpDateUserDetailsPage } from "../pages/up-date-user-details/up-date-user-details";
import { UserProfilePage } from "../pages/user-profile/user-profile";
import { HttpClientModule } from "@angular/common/http";
import { BillDataServicesProvider } from "../providers/bill-data-services/bill-data-services";
import { SettingsProvider } from "../providers/settings/settings";

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LogInPage,
    SignUpPage,
    ViewPage,
    BillPage,
    DetailPage,
    AboutUsPage,
    UpDateUserDetailsPage,
    UserProfilePage
  ],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LogInPage,
    SignUpPage,
    ViewPage,
    BillPage,
    DetailPage,
    AboutUsPage,
    UpDateUserDetailsPage,
    UserProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    BillDataServicesProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SettingsProvider
  ]
})
export class AppModule {}
