import { Component } from '@angular/core';
import {Platform,ActionSheetController,AlertController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public ary=[];

  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,private al: AlertController
    ) {}
    openAlart(){
      let addtodo=this.al.create({
        title:"Add todo",
        message:"enter your todo",
        inputs:[
          {
            type:"text",
            name:"box"
          }],
          buttons:[
            {
              text:"Cancle"
            },
            {
              text:"Add Todo",
              handler:(getData)=>{
                let x;
                x=getData.box;
                this.ary.push(x);
              }
            }]
      });
      addtodo.present()
 }


openMenu() {
  let actionSheet = this.actionsheetCtrl.create({
    title: 'Albums',
    cssClass: 'action-sheets-basic-page',
    buttons: [
      {
        text: 'Delete',
        role: 'destructive',
        icon: !this.platform.is('ios') ? 'trash' : null,
        handler: () => {
          console.log('Delete clicked');
        }
      },
      {
        text: 'Share',
        icon: !this.platform.is('ios') ? 'logo-github' : null,
        handler: () => {
          console.log('Share clicked');
        }
      },
      {
        text: 'Play',
        icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
        handler: () => {
          console.log('Play clicked');
        }
      },
      {
        text: 'Favorite',
        icon: !this.platform.is('ios') ? 'heart-outline' : null,
        handler: () => {
          console.log('Favorite clicked');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel', // will always sort to be on the bottom
        icon: !this.platform.is('ios') ? 'close' : null,
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present()
    }
  }
