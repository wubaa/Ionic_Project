import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { LogInPage } from "../pages/LogInPage/log-in";
import { AboutUsPage } from "../pages/about-us/about-us";
import { UpDateUserDetailsPage } from "../pages/up-date-user-details/up-date-user-details";
import { UserProfilePage } from "../pages/user-profile/user-profile";
//import {WelcomePage} from '../pages/welcome/welcome';
//import { HomePage } from "../pages/home/home";
import { SettingsProvider } from "../providers/settings/settings";
import { timer } from "rxjs/observable/timer";
@Component({
  templateUrl: "app.html",
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LogInPage;
  selectedTheme: String;
  UserProfilePage: any = UserProfilePage;
  pages: Array<{ title: string; component: any }>;
  showSplash = true;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private settings: SettingsProvider
  ) {
    this.settings
      .getActiveTheme()
      .subscribe((val) => (this.selectedTheme = val));
    statusBar.styleDefault();
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "Update User Details", component: UpDateUserDetailsPage },
      { title: "About us", component: AboutUsPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(() => (this.showSplash = false));
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  backToWelcome() {
    this.nav.setRoot(this.rootPage);
  }
  profile() {
    this.nav.setRoot(this.UserProfilePage);
  }
  //To LogOut from appliCation
  logOut() {
    this.backToWelcome();
  }

  // Switching theme light or dark
  toggleAppTheme() {
    if (this.selectedTheme === "light") {
      this.settings.setActiveTheme("dark");
    } else {
      this.settings.setActiveTheme("light");
    }
  }
}
