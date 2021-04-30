import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mylog = {
    username: null,
    password: null,
    msg: null
  }
  constructor(public navCtrl: NavController) {}

  login(){
    if(this.mylog.username === 'mugisha' && this.mylog.password === 'mugisha'){
      this.mylog.msg = 'Login Successful!!!'
    }
    else{
      this.mylog.msg = 'Username or Password Incorrect!! Try Again'
    }
  }
}
